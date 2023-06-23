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
      <div className="w-[500px] h-auto flex bg-transparent rounded-full shadow justify-center px-[10px] ">
        {/* <div className="flex justify-center items-center bg-[#6b7280] rounded-l-full p-1 ">
          <AiOutlineSearch size="40" className="self-center text-slate-100 " />
        </div> */}
        <input
          className="w-full rounded-[30px] bg-transparent outline-none focus:ring-0 px-2 focus:text-white"
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
