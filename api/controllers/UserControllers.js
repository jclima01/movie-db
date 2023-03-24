const User = require("../models/User");

exports.addToWatchlist = async (userid, movieid) => {
  if (!movieid) throw new Error("no movie provided");

  const user = await User.findById(
    { _id: userid },
  );
  

  if (user.watchlist.some(m => m === movieid))
    throw new Error("la pelicula ya está en tu watchlist");

  const update = await User.findByIdAndUpdate(
    { _id: userid },
    { $push: { watchlist: movieid } },
    { new: true },
  );
  return update;
};

exports.deleteFromWatchlist = async (userid, movieid) => {
  if (!movieid) throw new Error("no movie provided");

  const user = await User.findById(
    { _id: userid },
  );

  if (!user.watchlist.some(m => m === movieid))
    throw new Error("la pelicula no está en tu watchlist");

  const deleted = await User.findOneAndUpdate(
    { _id: userid },
    { $pull: { watchlist: movieid } },
    { new: true },
  );

  return deleted;
};
