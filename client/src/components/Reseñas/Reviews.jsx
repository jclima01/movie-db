import React, { useEffect } from "react";
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
    <div
      className="flex flex-col gap-4"
    >
      {reviews?.map((r) => (
        <Reseña key={r._id} comment={r.comment} createdAt={r.createdAt} />
      ))}
    </div>
  );
};

export default Reviews;
