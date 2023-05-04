import { useParams } from "react-router";
import useFetch from "../hooks/useFetchData";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Aos from "aos";

const Checkout = () => {
  const { checkoutID } = useParams();
  const movies = useFetch();
  const [movie, setMovie] = useState([]);
  // geting the specific data to the purshed Movie
  useEffect(() => {
    const moviesByID = movies.filter((movie) => movie.show.id === +checkoutID);
    setMovie(moviesByID);
  }, [checkoutID, movies]);

  // validation to the form with use-hook-form
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  // submiting the form and storing the data in the local storage
  const onSubmit = (data) => {
    localStorage.setItem("checkout", JSON.stringify(data));
    reset();
  };
  //aniation
  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);
  return (
    <section className="text-white mx-[6%] my-10">
      {movie?.map((movie) => {
        const { name, image, weight, id } = movie.show;
        return (
          <section key={id} className="flex md:flex-col gap-10">
            <img
              src={image.original || image.medium}
              alt="Movie image"
              className="w-[50%] md:w-full h-[500px]"
              data-aos="fade-right"
            />
            <div className="mt-10 w-full">
              <h1 className="text-3xl uppercase font-bold">purshe Thicket:</h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
                onInvalid
                data-aos="fade-up"
              >
                <label htmlFor="price">Movie:</label>
                <input
                  type="text"
                  name="movieName"
                  value={name}
                  disabled
                  className="pl-2 py-3 rounded-md text-black"
                />

                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  className="pl-2 py-3 rounded-md text-black"
                  name="price"
                  value={weight}
                  disabled
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="pl-2 py-3 rounded-md text-black"
                  {...register("email", {
                    required: "Email address is required",

                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                <p className="text-red-500">{errors.email?.message}</p>

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required!",
                    },
                  })}
                  className="pl-2 py-3 rounded-md text-black"
                />
                <p className="text-red-500">{errors.password?.message}</p>
                <button className="bg-red-600 hover:bg-white duration-300 hover:text-red-600 text-white font-semibold py-2 px-4 rounded-md">
                  Book Now
                </button>
              </form>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Checkout;
