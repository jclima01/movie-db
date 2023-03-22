import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import image from "/LogoPeliWhite.png";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="">
        <Container>
          <Link to="/">
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
      </Navbar>
    </>
  );
};

export default Nav;
