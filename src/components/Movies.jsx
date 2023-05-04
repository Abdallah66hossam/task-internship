import MovieCart from "./MovieCart";
import useFetchData from "../hooks/useFetchData";

const Movies = () => {
  const movies = useFetchData();
  return (
    <main className="flex flex-wrap justify-center gap-9 px-[8%] my-10">
      {movies.map((movie) => (
        <MovieCart key={movie.show.id} {...movie} img={movie.show.image} />
      ))}
    </main>
  );
};

export default Movies;
