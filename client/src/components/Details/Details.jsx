import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWatchlist, getMovie } from "../../redux/actions";
import Swal from "sweetalert2";
import { GoPlay } from "react-icons/go";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import AddReview from "../AddReview/AddReview";
import Reviews from "../Reseñas/Reviews";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
const Details = () => {
  const user = useSelector((state) => state.user);
  const movie = useSelector((state) => state.movie);
  const { movieid } = useParams();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getMovie(movieid));
  }, []);

  const handleDispatch = () => {
    dispatch(addToWatchlist(user, movie, { boolean: true }));
    Swal.fire({
      icon: "success",
    });
  };
  return (
    <div className="w-full gap-5 px-5 flex flex-col justify-center items-center p-4 ">
      <div className="relative max-w-[1200px]">
        <img
          src={
            movie.backdrop_path
              ? `${IMAGE_PATH}${movie.backdrop_path}`
              : "https://via.placeholder.com/150x150"
          }
          alt={movie.title}
          className="rounded  w-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <button className="btn-primary" onClick={() => setModalShow(true)}>
            <GoPlay className="text-4xl" />
          </button>
          <label className="text-slate-100">Watch Trailer</label>
        </div>
      </div>

      <div className="flex w-vw max-w-[1200px] gap-5">
        <div className="gap-5 h-full flex flex-col ">
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-base">{movie.overview}</p>
          </div>

          <div className="flex gap-x-2">
            <span className="font-semibold">Release date:</span>
            <span>{movie.release_date}</span>
          </div>

          <h1 className="flex gap-x-2">
            <span className="font-semibold">Director:</span>
            <span>
              {
                movie?.credits?.crew?.find(
                  (member) => member.job === "Director"
                ).name
              }
            </span>
          </h1>

          <div className="flex gap-x-2 ">
            <span className="font-semibold">Genres:</span>
            <span className="flex gap-2 mb-3">
              {movie?.genres?.map((g) => (
                <span key={g.id}>{g.name}</span>
              ))}
            </span>
          </div>
          <h1>Cast:</h1>
          <div className="flex w-full flex-wrap overflow-x-hidden scroll-auto gap-x-2">
            {movie?.credits?.cast?.map(
              (item, index) =>
                index < 16 && (
                  <span key={item.id} className="overflow-hidden">
                    {item.name}
                    {index !== 15 && <span> -- </span>}
                  </span>
                )
            )}
          </div>

          <div className="flex gap-2 mb-3">
            <button className="btn-primary" onClick={handleDispatch}>
              Add to Watchlist
            </button>
          </div>

          <ModalTrailer
            movie={movie}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <img
          className="h-96"
          src={`${IMAGE_PATH}/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="flex w-full max-w-[1200px] justify-start">
        <AddReview />
        <Reviews />
      </div>
    </div>
  );
};

export default Details;
