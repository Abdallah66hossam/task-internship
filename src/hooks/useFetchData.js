import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return movies;
};

export default useFetch;
