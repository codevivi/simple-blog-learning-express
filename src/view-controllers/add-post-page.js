export const addPostPage = async function (req, res, next) {
  if (req.query && req.query.message) {
    res.render("add-post", { message: req.query.message });
  } else {
    res.render("add-post");
  }
};
