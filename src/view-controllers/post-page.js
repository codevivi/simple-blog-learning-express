import { getPostByInd } from "../db.js";

export const postPage = async function (req, res, next) {
  let ind = req.params.id;
  let post = await getPostByInd(ind);
  if (post) {
    res.render("post", { post });
  } else {
    res.render("post", { errorMsg: "Atsiprasome ivyko klaida" });
  }
};
