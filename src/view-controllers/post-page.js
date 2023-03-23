import { getPostByInd } from "../db.js";

export const postPage = async function (req, res) {
  let ind = req.params.id;
  let post = await getPostByInd(ind);
  if (post) {
    res.render("post", { post });
  } else {
    res.render("post", { tempGlobals: req.tempGlobals });
  }
};
