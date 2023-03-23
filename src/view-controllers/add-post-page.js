export const addPostPage = async function (req, res, next) {
  res.render("add-post", { tempGlobals: req.tempGlobals });
};
