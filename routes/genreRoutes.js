const express = require("express");
const { addGenre, getAllGenres } = require("../controllers/genreController");
const router = express.Router();

router.post("/genres", addGenre);
router.get("/genres", getAllGenres);

module.exports = router;
