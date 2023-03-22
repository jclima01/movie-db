import React from "react";
import styles from "./Card.module.css";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";
const Card = ({ movie,onClick }) => {
  
  return (
    <div
      key={movie.id}
      className={styles.movieCard}
      onClick={onClick}
    >
      <img
        width={230}
        height={345}
        src={`${URL_IMAGE}/${movie.poster_path}`}
        alt={movie.title}
        className={styles.movieImg}
      />
      <h4>{movie.title}</h4>

    </div>
  );
};

export default Card;
