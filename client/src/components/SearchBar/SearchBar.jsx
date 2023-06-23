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
      <div className="w-[1000px] h-auto flex bg-transparent rounded-[30px] shadow justify-center px-[10px]">
        <div className="flex justify-center items-center ">
          <AiOutlineSearch size="50" className="self-center  text-slate-50" />
        </div>
        <input
          className="w-full h-[65px rounded-[30px] bg-transparent outline-none focus:ring-0"
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
