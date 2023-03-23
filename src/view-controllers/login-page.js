export const loginPage = function (req, res, next) {
  res.render("login", { tempGlobals: req.tempGlobals });
};
