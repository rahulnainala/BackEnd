function handleErrors(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || "something went wrong",
    },
  });
}

module.exports = handleErrors;
