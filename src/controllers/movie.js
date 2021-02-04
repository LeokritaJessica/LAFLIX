//Import data
const movieService = require("../services/movie");

//Modules exports
module.exports = {
  browse: async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1 } = req.query;
    try {
      const movie = await movieService.find(page);

      //get total documents
      const pageInfo = await movieService.getPagination(page);

      res.status(200).send({ data: movie, ...pageInfo });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  browseByCat: async (req, res) => {
    const { categoryId } = req.params;
    // destructure page and limit and set default values
    const { page = 1 } = req.query;
    try {
      const movie = await movieService.findByCat(categoryId, page);

      //get total documents in the category
      const pageInfo = await movieService.getPageInfo(page);

      res.status(200).send({ data: movie, ...pageInfo });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  browseByTag: async (req, res) => {
    const tag = req.params;
    // destructure page and limit and set default values
    const { page = 1 } = req.query;
    try {
      const movie = await movieService.findByTag(tag, page);

      //get total documents in the category
      const pageInfo = await movieService.getPageInfo(page);

      res.status(200).send({ data: movie, ...pageInfo });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  read: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await movieService.findId(id);

      res.status(200).send({ data: user });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  add: async (req, res) => {
    const { body } = req;
    //Create new movie
    const movieData = { ...body, category: body.categoryId };

    try {
      const savedMovie = await movieService.add(movieData, body.categoryId);
      res.send({ message: "Saved movie Success", data: savedMovie });
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
      res.send({ message: "Update movie Success", data: updateMovie });
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
  search: async (req, res) => {
    const { title } = req.params;

    try {
      const test = await movieService.search(title);
      res.send({ message: "Search movie Success", data: test });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  upload: async (req, res) => {
    const { file } = req;
    const { movieId } = req.params;

    //Update movie
    const uploadFile = file.location;

    try {
      const upload = await movieService.edit(movieId, uploadFile);
      res.send({ message: "Upload photo Success", data: upload });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
