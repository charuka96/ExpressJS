const textMiddleware = (req, res, next) => {
  if (req.method == "GET") {
    res.sentStaus(200);
    return next();
  }
  res.sentStaus(200);
};
export default textMiddleware;
