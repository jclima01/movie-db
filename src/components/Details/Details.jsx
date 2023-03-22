import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../../redux/actions";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    dispatch(getMovie(id));
  }, []);
  return (
    <div>
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

            <Button variant="primary" onClick={() => setModalShow(true)}>
              Ver Trailer
            </Button>

            <ModalTrailer
              movie={movie}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
