export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCode == err.statusCode || 500;

  // console.log(err);

  // if (err.name === "RangeError"){
  //   err.message = `Invalid ${err.path}`
  //   err.statusCode = 400
  // }

  res.status(err.statusCode).json({ sucess: false, message: err });
};

export const asyncError = (passedFunc) =>  (req, res, next) => {
    Promise.resolve(passedFunc(req, res, next)).catch(next);
  };

