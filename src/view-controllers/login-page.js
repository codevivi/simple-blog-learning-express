export const loginPage = function (req, res, next) {
  res.render("login", { message: `${req.query.message ? req.query.message : ""}` });
};
