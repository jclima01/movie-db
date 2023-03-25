import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview } from "../../redux/actions";

const AddReview = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const {movieid} = useParams()
  const [comment, setComment] = useState({
    review: "",
  });

  const handleInputChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview(user,comment.review,movieid));
  };

  
  return (
    <div>
      <h1>Deja tu reseña:</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ width: "80%" }}
          name="review"
          id="review"
          cols="30"
          rows="4"
          onChange={handleInputChange}
        ></textarea>
        <Button style={{ width: "auto" }} type="submit">Reseña</Button>
      </form>
    </div>
  );
};

export default AddReview;
