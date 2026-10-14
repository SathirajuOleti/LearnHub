// src/middleware/error.js
export function notFound(req, res, next) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

export function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    error: err.message,
    // In production, you may hide stack traces
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}
