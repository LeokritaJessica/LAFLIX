//Import dependencies
const joi = require("joi");

//Module exports
module.exports = {
  add: (req, res, next) => {
    const { body } = req;
    const schema = joi.object({
      headline: joi.string().required(),
      comment: joi.string().required(),
      rating: joi.number().required().min(1).max(10),
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
      headline: joi.string().required(),
      comment: joi.string().required(),
      rating: joi.number().required(),
    });

    const validation = schema.validate(body);

    if (!validation.error) next();
    else
      res.status(500).send({
        error: validation.error.details[0].message,
      });
  },
};