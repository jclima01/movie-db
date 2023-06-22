import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWatchlist, getMovie } from "../../redux/actions";
import AddReview from "../AddReview/AddReview";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import Reviews from "../Reseñas/Reviews";
import Swal from "sweetalert2";
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
    <div className="d-flex flex-column gap-5 m-5">
      <div>
        <section className="d-flex gap-5">
          <img
            width={300}
            src={`${IMAGE_PATH}/${movie.poster_path}`}
            alt={movie.title}
          />

          <section className="gap-5">
            <h1>{movie.title}</h1>
            <h1>{movie.overview}</h1>

            <h1>Fecha de estreno:</h1>
            <h3>{movie.release_date}</h3>

            <h1>Géneros:</h1>
            <div className="d-flex gap-2 mb-3">
              {movie.genres?.map((g) => (
                <div key={g.id}>{g.name}</div>
              ))}
            </div>
            <div className="d-flex gap-2 mb-3">
              <button variant="primary" onClick={() => setModalShow(true)}>
                Ver Trailer
              </button>

              <button variant="primary" onClick={handleDispatch}>
                Add to Watchlist
              </button>
            </div>

            <ModalTrailer
              movie={movie}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </section>
        </section>
      </div>
      <AddReview />
      <Reviews />
    </div>
  );
};

export default Details;
