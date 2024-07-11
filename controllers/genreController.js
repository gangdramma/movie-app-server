const Genre = require("../models/Genre");

const addGenre = async (req, res) => {
  const { title } = req.body;
  try {
    const genre = new Genre({ title });
    await genre.save();
    res.status(201).json(genre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addGenre, getAllGenres };
