//Import dependencies
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Import data
const { SECRET_TOKEN } = process.env;
const loginService = require("../services/auth");

//Module exports
module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      //Checking if the user already in database
      const isEmailValid = await loginService.findEmail(email);
      if (!isEmailValid) return res.status(400).send("Invalid email");

      //Checking if password is correct
      const isPassValid = await bcrypt.compare(password, isEmailValid.password);
      if (!isPassValid) return res.status(400).send("Invalid password");

      //Create and assign a token
      const payload = {_id: isEmailValid.id};
      const token = jwt.sign(payload, SECRET_TOKEN, { expiresIn: "1800s" });

      res.status(200).send({info: 'LOGIN', data: {token}})
    } catch (err) {
      res.status(400).json(err);
    }
  },
  register: async (req, res) => {
    const { body } = req;

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(body.password, salt);

    //Find exist email in database
    const isEmailValid = await loginService.findEmail(body.email);
    if (isEmailValid) return res.status(400).send("This Email already used");

    //Create new user
    const userData = {
      ...body,
      password: hashedPass,
    };
    try {
      const savedUser = await loginService.register(userData);
      res.send(savedUser);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
