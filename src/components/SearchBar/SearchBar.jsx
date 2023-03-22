import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMovies, setSearchKey } from "../../redux/actions";
// import { fetchMovie,fetchMovies } from "../../utils/useFetchs";
const SearchBar = () => {
  // const [searchKey, setSearchKey] = useState("");

  const searchKey = useSelector(state => state.searchKey)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const searchMovies = (e) => {
    e.preventDefault();
    navigate("/")
  };

  
  return (
    <>
      <Form className="d-flex gap-4" onSubmit={searchMovies}>
        <Form.Control
          type="text"
          placeholder="Search movies"
          aria-label="Search"
          name="search"
          onChange={(e) => dispatch(setSearchKey(e.target.value))}
        />

      </Form>
    </>
  );
};

export default SearchBar;
