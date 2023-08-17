import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions";
import logo from "../../../assets/logo.svg";
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleLoout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-auto px-4 py-2  flex justify-between items-center gap-x-4 box-border bg-slate-800 border-slate-100">
      <Link to="/">
        <img src={logo} alt="" className="w-48 h-auto" />
      </Link>

      <SearchBar />
      <div className="flex justify-evenly gap-x-3 ">
        {user ? (
          <>
            <Link to="/watchlist" className="w-auto">
              <button className="btn-secondary cursor-pointer">
                Watchlist
              </button>
            </Link>
            <button onClick={handleLoout} className="btn-secondary w-auto">
              Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="btn-secondary w-auto">
            Login
          </button>
        )}
      </div>

      {/* Hamburger */}
      {/* <div onClick={handleClick} className="md:hidden z-10 p-4">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

      {/* Mobile menu */}
      {/* <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" duration={500} offset={-80}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" duration={500} offset={-80}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" duration={500} offset={-80}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" duration={500} offset={-80}>
            Contact
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Nav;
