const {
  ValidationError,
  WrongParametersError,
  WrongDirectoryError,
} = require("./errors");

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  console.log(error instanceof ValidationError);
  console.log(error instanceof WrongParametersError);
  console.log(error instanceof WrongDirectoryError);
  if (
    error instanceof ValidationError ||
    error instanceof WrongParametersError ||
    error instanceof WrongDirectoryError
  ) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  asyncWrapper,
  errorHandler,
};
