import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
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
console.log(movie)
  return (
    <div className="d-flex flex-column gap-5 m-5">
      <Card>
        <Card.Body className="d-flex gap-5">
          <Image
            width={300}
            src={`${IMAGE_PATH}/${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="gap-5">
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>

            <Card.Title>Fecha de estreno:</Card.Title>
            <Card.Text>{movie.release_date}</Card.Text>

            <Card.Title>Géneros:</Card.Title>
            <div className="d-flex gap-2 mb-3">
              {movie.genres?.map((g) => (
                <div key={g.id}>{g.name}</div>
              ))}
            </div>
            <div className="d-flex gap-2 mb-3">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Ver Trailer
              </Button>

              <Button variant="primary" onClick={handleDispatch}>
                Add to Watchlist
              </Button>
            </div>

            <ModalTrailer
              movie={movie}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Card.Body>
      </Card>
      <AddReview />
      <Reviews />
    </div>
  );
};

export default Details;
