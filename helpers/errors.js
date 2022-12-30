class ClientError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class ValidationError extends ClientError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParametersError extends ClientError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongDirectoryError extends ClientError {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

class NotAuthorizedError extends ClientError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class RegistrationConflictError extends ClientError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

module.exports = {
  ValidationError,
  WrongParametersError,
  WrongDirectoryError,
  NotAuthorizedError,
  ClientError,
  RegistrationConflictError,
};
