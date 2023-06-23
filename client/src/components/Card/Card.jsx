import React, { useEffect } from "react";
import styles from "./Card.module.css";
import { getGenres } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import imdb from "../../../public/group.png"
import tomato from "../../../public/tomato.png"
const URL_IMAGE = "https://image.tmdb.org/t/p/original";

const Card = ({ movie, onClick }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
console.log(movie)
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const movieGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genre) => genre.name);
  return (
    <div
      className="w-[250px] h-[490px] p-[0px] flex-col justify-start items-start gap-[12px] inline-flex"
      key={movie.id}
      onClick={onClick}
    >
      <div className="w-[250px] h-[370px] relative">
        <div className="w-[250px] h-[370px] left-[0px] top-[0px] absolute">
          <div className="w-[250px] h-[370px] left-[0px] top-[0px] absolute bg-stone-300" />
          <img
            className="w-[250px] h-[370px] left-[0px] top-[0px] absolute"
            src={`${URL_IMAGE}/${movie.poster_path}`}
          />
        </div>
        <div className="w-[218px] h-[29.21px] p-[0px] left-[16px] top-[15.58px] absolute justify-center items-center gap-[114px] inline-flex">
          <div className="self-stretch px-2 py-[3px] bg-gray-100 bg-opacity-50 rounded-xl backdrop-blur-[2px] justify-start items-start gap-[10px] inline-flex">
            {/* <div className="text-gray-900 text-[12px] font-bold">TV SERIES</div> */}
          </div>
          <div className="w-[30px] h-[29.21px] relative">
            <div className="w-[30px] h-[29.21px] left-[0px] top-[0px] absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-[2px]" />
            <div className="w-[20px] h-[19.47px] left-[5px] top-[4.87px] absolute" />
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-[12px] font-bold">
        {movie.release_date}
      </div>
      <h3 className="w-[250px] text-gray-900 text-[18px] font-bold">
        {movie.title}
      </h3>
      <div className="w-[250px] p-[0px] justify-between items-start gap-8 inline-flex">
        <div className="p-[0px] justify-start items-center gap-[10px] flex">
          <img
            className="w-[35px] h-[17px]"
            src={imdb}
          />
          <div className="text-gray-900 text-[12px] font-normal leading-3">
            {movie.vote_average}/10
          </div>
        </div>
        <div className="p-[0px] justify-start items-center gap-[10px] flex">
          <img
            className="w-4 h-[17px]"
            src={tomato}
          />
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
