import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useFetchByID = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${movieID}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieID]);
  const { name, type, language, genres, rating, image, summary, weight } =
    movie;
  return {
    name,
    type,
    language,
    genres,
    rating,
    image,
    summary,
    weight,
    movieID,
  };
};

export default useFetchByID;
