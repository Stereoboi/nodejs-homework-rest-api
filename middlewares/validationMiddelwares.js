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
      throw new ValidationError(validationResult.error.details[0].message);
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
      throw new ValidationError(validationResult.error.details[0].message);
    }
    next();
  },

  registrationValidation: (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string().min(5).max(15),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "ua"] },
      }),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      throw new ValidationError(validationResult.error.details[0].message);
    }
    next();
  },

  loginValidation: (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string().min(5).max(15),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      throw new ValidationError(validationResult.error.details[0].message);
    }
    next();
  },
  secondVerificationValidation: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "ua"] },
        })
        .required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      throw new ValidationError(validationResult.error.details[0].message);
    }
    next();
  },
};
