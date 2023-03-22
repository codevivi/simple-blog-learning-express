export const logout = function (req, res, next) {
  req.session.destroy(function () {
    res.redirect("/");
  });
};
