import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const Home = () => {
  const movies = useSelector((state) => state.movies);
  const searchKey = useSelector((state) => state.searchKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(searchKey));
  }, [searchKey]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl">Peliculas destacadas:</h1>
      <div className="max-w-[1200px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-lg gap-16 mb-auto p-10 justify-center text-gray-800">
        {movies?.map((movie) => (
          <Link to={`/detail/${movie.id}`} key={movie.id}>
            <Card key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
