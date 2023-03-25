import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import dateFormat, { masks } from "dateformat";

const Reseña = ({ comment,createdAt }) => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Card.Header>{user.name} {dateFormat(createdAt,"dddd, mmmm dS, yy, h:MM TT")}</Card.Header>
      <Card.Body>
        <Card.Text >{comment}</Card.Text>
      </Card.Body>
    </>
  );
};

export default Reseña;
