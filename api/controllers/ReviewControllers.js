const Review = require("../models/Review");

exports.createReview = async (userid, movieid, comment) => {
  if (!comment) throw new Error("No text provided");
  if (!userid) throw new Error("no userid provided");

  const newReview = new Review({ userid, movieid, comment });

  const saveReview = await newReview.save();

  return saveReview;
};

exports.searchReviews = async (id) => {
  if (!id) throw new Error("movieid not provided");

  const reviews = await Review.find({ movieid: id });
  
  return reviews
};
