import { getAllPosts } from "../db.js";
export const homePage = async function (req, res, next) {
  let posts = await getAllPosts();
  res.render("home", { posts, user: req.user });
};
