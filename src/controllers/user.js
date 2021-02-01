//Import data
const bcrypt = require('bcrypt')
const userService = require("../services/user");

//Modules exports
module.exports = {
  browse: async (req, res) => {
    try {
      const user = await userService.find();

      res.status(200).send({ data: user });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  read: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.findId(id);

      res.status(200).send({ data: user });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  edit: async (req, res) => {
    try {
      const { body } = req;
      const { id } = req.params;
      //hash password
      const salt = await bcrypt.genSalt(10);
      console.log(salt);
      const hashedPass = await bcrypt.hash(body.password, salt);

      const userData = {
        ...body,
        password: hashedPass,
      };
      console.log(userData);
      
      const editUser = await userService.edit(id, userData);
      res.status(200).send({ message: "Update user Success", data: editUser });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteUser = await userService.delete(id);

      res.status(200).send({ message: "Delete user Success", data: deleteUser });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
