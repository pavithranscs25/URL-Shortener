function errorHandler(error, req, res, next) {
  console.error(error.message);

  if (res.headersSent) {
    return next(error);
  }

  return res.status(500).json({
    error: 'Internal server error',
  });
}

module.exports = errorHandler;
