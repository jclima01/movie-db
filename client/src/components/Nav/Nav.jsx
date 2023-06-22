import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import image from "/LogoPeliWhite.png";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
const Nav = () => {
  const dispatch = useDispatch();

  const handleButton = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <nav bg="dark" variant="dark" className="gap">
        <div>
          <Link to="/home">
            <img
              alt=""
              src={image}
              width="auto"
              height="70"
              className="d-inline-block align-center"
            />
          </Link>

          <SearchBar />
        </div>
        <button className="m-4" onClick={handleButton}>
          Logout
        </button>
        <Link to="/watchlist">
          <button className="m-4">
            Watchlist
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
