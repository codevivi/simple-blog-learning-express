import { savePost } from "../db.js";
export const addPost = async function (req, res, next) {
  if (req.body.title && req.body.content && req.body.description && req.body.img) {
    savePost(req.body);
    res.redirect("/");
  } else {
    res.redirect("./add-post?message=fill in all fields");
  }
};
