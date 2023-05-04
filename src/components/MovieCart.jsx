import Aos from "aos";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const MovieCart = ({ show }) => {
  const { id, image, name, rating, summary } = show;

  //aniation
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Link
      to={`/movies/${id}`}
      className="bg-[#222] rounded-xl shadow-sh w-[29%] md:w-[40%] sm:w-full cursor-pointer h-[400px] pb-5 group overflow-hidden"
      data-aos="fade-up"
    >
      <img
        className="h-[60%] w-screen object-fill rounded-t-lg group-hover:scale-110 duration-500"
        src={image?.original}
        alt="Movie Poster"
      />
      <div className="px-6  mt-4">
        <h2 className="text-xl font-bold text-white ">{name}</h2>
        <p className="text-white mb-3 h-[40%]">
          {summary
            .replaceAll("<p>", "")
            .replaceAll("<b>", "")
            .replaceAll("</b>", "")
            .slice(0, 40)}
          ...
        </p>
        <div className="flex items-center justify-between">
          {!!rating?.average ? (
            <span className="text-white text-lg font-semibold flex flex-col items-center">
              <span className="text-xs relative top-[25px]">
                {rating.average}
              </span>
              <AiFillStar color="gold" size={35} />
            </span>
          ) : (
            <AiFillStar color="gold" size={35} />
          )}
          <Link to={`/checkout/${id}`}>
            <button
              className={`bg-red-600 hover:bg-white duration-300 hover:text-red-600 text-white font-semibold py-2 px-4 rounded-md ${
                !!rating?.average && "relative top-[10px]"
              }
                 `}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default MovieCart;
