import React from "react";
import { useDispatch} from "react-redux";
import {  useNavigate } from "react-router-dom";
import {  setSearchKey } from "../../redux/actions";
const SearchBar = () => {

 
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const searchMovies = (e) => {
    e.preventDefault();
    navigate("/home")
  };

  
  return (
    <>
      <form className="d-flex gap-4" onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search movies"
          aria-label="Search"
          name="search"
          onChange={(e) => dispatch(setSearchKey(e.target.value))}
        />

      </form>
    </>
  );
};

export default SearchBar;
