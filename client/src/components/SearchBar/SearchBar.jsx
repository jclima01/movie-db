import React from "react";
import {  Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {  setSearchKey } from "../../redux/actions";
const SearchBar = () => {

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
