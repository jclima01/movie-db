import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import image from "../../../assets/LogoPeliWhite.png";
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
    
      <div className="w-full h-auto p-3 flex justify-between items-center bg-gray-500">
        <Link to="/home">
          <img
            alt="logo"
            src={image}
            className="px-4 w-[200px]  border shadow-lg rounded  "
          />
        </Link>
        <SearchBar />
        <div className="flex gap-x-3 box-border">
          <Link to="/watchlist" className="">
            <button className="btn-secondary cursor-pointer">Watchlist</button>
          </Link>
          <button onClick={handleButton} className="btn-secondary">
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
