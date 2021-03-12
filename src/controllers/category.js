//Import data
const categoryService = require("../services/category");

//Modules exports
module.exports = {
  browse: async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1 } = req.query;
    try {
      const category = await categoryService.find(page);

      //get total documents
      const pageInfo = await categoryService.getPagination(page);

      res.status(200).send({ data: category, ...pageInfo });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  add: async (req, res) => {
    const { body } = req;

    //Create new category
    const categoryData = { ...body };

    try {
      const savedCategory = await categoryService.add(categoryData);
      res.send(savedCategory);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  edit: async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    //Update category
    const categoryData = { ...body };

    try {
      const updateCategory = await categoryService.edit(id, categoryData);
      res.send(updateCategory);
    } catch (err) {
      res
        .status(400)
        .send({ message: "Update category Success", data: updateCategory });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteCategory = await categoryService.delete(id);

      res
        .status(200)
        .send({ message: "Delete category Success", data: deleteCategory });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
