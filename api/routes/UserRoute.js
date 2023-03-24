const { Router } = require("express");
const router = Router();
const {
  addToWatchlist,
  deleteFromWatchlist,
} = require("../controllers/UserControllers");
const { verifyToken } = require("../routes/VerifyToken");

router.put("/:movieid", verifyToken, async (req, res) => {
  const { movieid } = req.params;
  const { boolean } = req.body;
  console.log(boolean)
  try {
    if (boolean) {
      const movieAdded = await addToWatchlist(req.user.id, movieid);
      res.status(200).json(movieAdded);
    } else {
      const movieDeleted = await deleteFromWatchlist(req.user.id, movieid);
      res.status(200).json(movieDeleted);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
