import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import useFetchByID from "../hooks/useFetchByID";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const MoviesDetails = () => {
  const [seeMore, setSeeMore] = useState(false);
  const seeMoreHandler = () => {
    setSeeMore(!seeMore);
  };
  const {
    name,
    type,
    language,
    genres,
    rating,
    image,
    summary,
    weight,
    movieID,
  } = useFetchByID();
  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);
  return (
    <section className="text-gray-700 body-font overflow-hidden my-10 mx-[8%]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex sm:flex-col" data-aos="fade-zoom-left">
          <img
            className="h-[450px] object-fill sm:w-full w-[40%] rounded border border-gray-200"
            src={image?.original || image?.medium}
            alt="product image"
            data-aos="fade-right"
          />
          <div
            className="w-1/2  pl-10 py-6 mt-0 sm:w-full"
            data-aos="fade-left"
          >
            <h2 className="text-sm title-font text-gray-300 tracking-widest">
              {type}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {rating?.average ? (
                  <span className="flex items-center gap-1 text-yellow-400">
                    <AiFillStar color="gold" size={22} />
                    {rating?.average}
                  </span>
                ) : (
                  "not specified"
                )}
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 text-white">
                {language?.slice(0, 2)}
              </span>
            </div>
            <span className=" pl-3 py-2 text-white block text-3xl sm:text-xl">
              ${weight}
            </span>
            <span className="title-font font-medium text-2xl text-gray-400">
              {genres}
            </span>
            <p className="my-5 text-white">
              {seeMore
                ? summary
                    ?.replaceAll("<p>", "")
                    .replaceAll("</p>", "")
                    .replaceAll("<b>", "")
                    .replaceAll("</b>", "")
                : summary
                    ?.replaceAll("<p>", "")
                    .replaceAll("</p>", "")
                    .replaceAll("<b>", "")
                    .replaceAll("</b>", "")
                    .slice(0, 100)}
              {`...`}
              <button
                className="text-blue-500 text-sm"
                onClick={seeMoreHandler}
              >
                {!seeMore ? "show more..." : "show less..."}
              </button>
            </p>

            <Link to={`/checkout/${movieID}`}>
              <button
                className={`ml-auto bg-red-600 hover:bg-white duration-300 hover:text-red-600 text-white font-semibold py-2 px-4 rounded-md`}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesDetails;
