import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import image from "/LogoPeliWhite.png";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
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
      <Navbar bg="dark" variant="dark" className="gap">
        <Container>
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
        </Container>
        <Button className="m-4" onClick={handleButton}>Logout</Button>
      </Navbar>
    </>
  );
};

export default Nav;
