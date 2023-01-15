const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../helpers/errors");

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    throw new NotAuthorizedError("Please provide a token");
  }
  const [tokenType, token] = req.headers.authorization.split(" ");
  if (!token) {
    throw new NotAuthorizedError("Please provide a token");
  }
  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    throw new NotAuthorizedError("Invalid token");
  }
};

module.exports = {
  authMiddleware,
};
