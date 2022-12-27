const Joi = require("joi");
const { ValidationError } = require("../helpers/errors");
module.exports = {
  addContactValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),

      phone: Joi.string().min(10).max(12).required(),

      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      favorite: Joi.boolean(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details[0].message));
    }
    next();
  },

  updateContactValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30),

      phone: Joi.string().min(10).max(12),

      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      favorite: Joi.boolean(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details[0].message));
    }
    next();
  },
};
