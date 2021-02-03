//Import dependencies
const joi = require("joi");

//Module exports
module.exports = {
  add: (req, res, next) => {
    const { body } = req;
    const schema = joi.object({
      title: joi.string().required(),
      trailer: joi.string().required(),
      starring: joi.string().required(),
      synopsis: joi.string().required(),
      director: joi.string().required(),
      duration: joi.string().required(),
      budget: joi.string().required(),
      tag: joi.string().required(),
      releaseDate: joi.string().required(),
      categoryId: joi.string().required(),
    });

    const validation = schema.validate(body);

    if (!validation.error) next();
    else
      res.status(500).send({
        error: validation.error.details[0].message,
      });
  },
  edit: (req, res, next) => {
    const { body } = req;
    const schema = joi.object({
      title: joi.string().required(),
      trailer: joi.string().required(),
      starring: joi.string().required(),
      synopsis: joi.string().required(),
      director: joi.string().required(),
      tag: joi.string().required(),
      releaseDate: joi.string().integer().required(),
    });

    const validation = schema.validate(body);

    if (!validation.error) next();
    else
      res.status(500).send({
        error: validation.error.details[0].message,
      });
  },
};
