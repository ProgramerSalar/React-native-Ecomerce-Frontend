export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCode == err.statusCode || 500;

  // console.log(err);

  if (err.name === "RangeError"){
    err.message = `Invalid ${err.path}`
    err.statusCode = 400
  }
  if (err.name === 200){
    err.message = `Invalid ${err.path}`
    err.statusCode = 400
  }
  if (err.name === 500){
    err.message = `Invalid ${err.path}`
    err.statusCode = 400
  }

  res.status(err.statusCode).json({ success: false, message: err.message });
};

export const asyncError = (passedFunc) =>  (req, res, next) => {
    Promise.resolve(passedFunc(req, res, next)).catch(next);
  };

