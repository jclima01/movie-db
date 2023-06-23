import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
const Nav = () => {
  const dispatch = useDispatch();

  const handleButton = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-auto px-4 py-2  flex justify-between items-center gap-x-4 box-border bg-slate-800 border-slate-100" >
      <div className=" btn-secondary ">
        <Link to="/home">moviedb</Link>
      </div>

      <SearchBar />
      <div className="flex justify-evenly gap-x-3 ">
        <Link to="/watchlist" className="w-auto">
          <button className="btn-secondary cursor-pointer">Watchlist</button>
        </Link>
        <button onClick={handleButton} className="btn-secondary w-auto">
          Logout
        </button>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 p-4">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
