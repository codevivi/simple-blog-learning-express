import { getAllUsers } from "../db.js";
export const login = async function (req, res, next) {
  let users = await getAllUsers();
  let user = users.find((user) => {
    return user.email === req.body.email && user.password === req.body.password;
  });
  if (user) {
    req.session.isLoggedIn = true;
    req.session.userName = user.name;
    return res.redirect("/add-post");
  }
  let message = "Login details did not match".replaceAll(" ", "%20");
  res.redirect(`/login?message=${message}`);
};
