import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview } from "../../redux/actions";

const AddReview = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { movieid } = useParams();
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
    dispatch(addReview(user, comment.review, movieid));
  };

  return (
    <div className="flex flex-col gap-2">
      <h1>Publish your review</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-2 items-start justify-start"
      >
        <textarea
          style={{ width: "80%" }}
          name="review"
          id="review"
          cols="30"
          rows="2"
          className="border rounded-md"
          onChange={handleInputChange}
        ></textarea>
        <button className="btn-primary" type="submit">
          Add review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
