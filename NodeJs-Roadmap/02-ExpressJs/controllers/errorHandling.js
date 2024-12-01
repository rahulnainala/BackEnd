function handleErrors(err, req, res, next) {
  console.log(req.body);
  console.error(err.stack); // Log error details
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || "Something went wrong!",
    },
  });
}

module.exports = handleErrors;
