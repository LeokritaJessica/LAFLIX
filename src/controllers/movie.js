//Import data
const movieService = require("../services/movie");

//Modules exports
module.exports = {
  browse: async (req, res) => {
    try {
      const movie = await movieService.find();

      res.status(200).send({ data: movie });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  add: async (req, res) => {
    const { body } = req;

    //Create new movie
    const movieData = { ...body };

    try {
      const savedMovie = await movieService.add(movieData);
      res.send(savedMovie);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  edit: async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    //Update movie
    const movieData = { ...body };

    try {
      const updateMovie = await movieService.edit(id, movieData);
      res.send({ message: "Update movie Success", data: updateMovie});
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteMovie = await movieService.delete(id);

      res
        .status(200)
        .send({ message: "Delete movie Success", data: deleteMovie });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
