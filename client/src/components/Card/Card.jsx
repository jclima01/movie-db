import React, { useEffect } from "react";
import { getGenres } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import imdb from "../../../assets/group.png";
import tomato from "../../../assets/tomato.png";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";

const Card = ({ movie, onClick }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  console.log(movie);
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const movieGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genre) => genre.name);
  return (
    <div
      className="w-[250px] h-[450px] p-[0px] flex-col justify-start items-start gap-[12px] inline-flex"
      key={movie.id}
      onClick={onClick}
    >
      <div className="w-[250px] h-[370px] ">
          <img
            className="rounded-md "
            src={`${URL_IMAGE}/${movie.poster_path}`}
          />      
      </div>
      <div className="text-gray-400 text-sm  mt-4 font-bold">
        {movie.release_date}
      </div>
      <h3 className="w-[250px] text-gray-900 text-[18px] font-bold">
        {movie.title}
      </h3>
      <div className="w-[250px] p-[0px] justify-between items-start gap-8 inline-flex">
        <div className="p-[0px] justify-start items-center gap-[10px] flex">
          <img className="w-[35px] h-[17px]" src={imdb} />
          <div className="text-gray-900 text-[12px] font-normal leading-3">
            {movie.vote_average}/10
          </div>
        </div>
        <div className="p-[0px] justify-start items-center gap-[10px] flex">
          <img className="w-4 h-[17px]" src={tomato} />
          <div className="text-gray-900 text-[12px] font-normal leading-3">
            97%
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-[12px] font-bold flex w-full overflow-hidden gap-3">
        {movieGenres.map((genre) => (
          <div>{genre}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
