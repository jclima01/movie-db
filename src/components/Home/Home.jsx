import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getMovies } from "../../redux/actions";
import Card from "../Card/Card";
const Home = () => {
  const movies = useSelector((state) => state.movies);
  const movie = useSelector((state) => state.movie);
  const trailer = useSelector((state) => state.trailer);
  const dispatch = useDispatch();
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const selectMovie = async (movie) => {
    dispatch(getMovie(movie.id));
    window.scrollTo(0, 0);
  };

  return (
    <>

      
        <div>
          <h2>trailer movies</h2>
          {movie ? (
            <div
              className={styles.viewtrailer}
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className={styles.reproductor}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className={styles.descriptionContainer}>
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      

      <div className={styles.gridContainer}>
        {movies?.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            onClick={() => selectMovie(movie)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
