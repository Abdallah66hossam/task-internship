import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://www.kenyans.co.ke/files/styles/article_style/public/images/media/feature-image-movie.jpg?itok=ndwCxg1E")',
      }}
      className="bg-no-repeat bg-cover bg-center bg-fixed h-[80vh] w-full text-white  flex flex-col justify-center"
    >
      <div className="mx-[8%]">
        <h1 className="font-black text-6xl w-[70%] md:text-3xl">
          Book your ticket now?
        </h1>
        <h3 className="font-bold text-md mb-2">The best Movise ever!</h3>
        <Link to="checkout">
          <button
            className={`ml-auto bg-red-600 md:text-xm md:py-2 md:px-3 hover:bg-white duration-300 hover:text-red-600 text-white font-semibold py-2 px-4 rounded-md`}
          >
            Book Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
