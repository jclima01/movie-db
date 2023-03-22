import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions";
// import { fetchMovie,fetchMovies } from "../../utils/useFetchs";
const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const searchMovies = (e) => {
    e.preventDefault();
    dispatch(getMovies(searchKey));
  };

  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          console.log(searchKey);
          return setSearchKey(e.target.value);
        }}
        name="search"
        id=""
      />
      <button type='submit'>search</button>
    </form>
  );
};

export default SearchBar;
