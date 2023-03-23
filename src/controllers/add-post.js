import { savePost } from "../db.js";
export const addPost = async function (req, res, next) {
  if (req.body.title && req.body.content && req.body.description) {
    savePost(req.body);
    res.redirect("/");
  } else {
    req.session.errMsg = "Fill in all fields";
    res.redirect("./add-post");
  }
};
