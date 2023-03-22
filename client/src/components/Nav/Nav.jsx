import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import image from "/LogoPeliWhite.png";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="gap">
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
      <Button className="m-4">
        Logout
      </Button>
      </Navbar>
    </>
  );
};

export default Nav;
