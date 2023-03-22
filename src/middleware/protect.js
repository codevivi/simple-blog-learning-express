export const protect = async function (req, res, next) {
  if (!req.session.isLoggedIn) {
    return res.redirect("/");
  }
  next();
};
