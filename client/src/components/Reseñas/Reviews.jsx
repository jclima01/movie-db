import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviews } from "../../redux/actions";
import Reseña from "../Reseña/Reseña";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { movieid } = useParams();
  useEffect(() => {
    dispatch(getReviews(user, movieid));
  }, [reviews, movieid]);

  return (
    <Card
      style={{ width: "50%", flexDirection: "column-reverse" }}
      className="d-flex gap-4 border"
    >
      {reviews?.map((r) => (
        <Reseña key={r._id} comment={r.comment} createdAt={r.createdAt} />
      ))}
    </Card>
  );
};

export default Reviews;
