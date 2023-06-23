import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchKey } from "../../redux/actions";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchMovies = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <div className="w-[1000px] h-[65px] relative flex">
        <AiOutlineSearch size="lg" />
        <input
          className="w-[889px] h-[65px] left-[0px] top-[0px] absolute bg-transparent rounded-[30px] shadow"
          placeholder="Search movies"
          aria-label="Search"
          name="search"
          onChange={(e) => dispatch(setSearchKey(e.target.value))}
        />
      </div>

    </>
  );
};

export default SearchBar;
