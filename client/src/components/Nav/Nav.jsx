import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import image from "/LogoPeliWhite.png";
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
    <>
      <div className="w-screen h-7 flex justify-between items-center bg-slate-500 p-5">
        <div>
          <Link to="/home">
            <img
              alt="logo"
              src={image}
              className="h-16 w-auto d-inline-block align-center"
            />
          </Link>
        </div>
        <SearchBar />
        <div className="flex gap-3 box-border">
          <div className="btn-primary ">
            <Link to="/watchlist" className="decoration-transparent">
              Watchlist
            </Link>
          </div>
          <div className="btn-primary">
            <a onClick={handleButton}>Logout</a>
          </div>
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
    </>
  );
};

export default Nav;
