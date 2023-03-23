import express from "express";
import { engine } from "express-handlebars";
// middleware
import { protect } from "./src/middleware/protect.js";
import { useTempGlobals } from "./src/middleware/useTempGlobals.js";
//pages
import { homePage } from "./src/view-controllers/home-page.js";
import { postPage } from "./src/view-controllers/post-page.js";
import { loginPage } from "./src/view-controllers/login-page.js";
//actions
import { addPostPage } from "./src/view-controllers/add-post-page.js";
import { addPost } from "./src/controllers/add-post.js";
import { login } from "./src/controllers/login.js";
import { logout } from "./src/controllers/logout.js";

import session from "express-session";
const PORT = 5000;

const app = express();

// app.set('trust proxy', 1); //for production

app.use(
  session({
    secret: "secret string have it in env vars",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", useTempGlobals, homePage);
app.get("/login", useTempGlobals, loginPage);
app.get("/logout", protect, logout);
app.get("/post/:id", useTempGlobals, postPage);
app.get("/add-post", protect, useTempGlobals, addPostPage);

app.post("/login", login);
app.post("/add-post", protect, addPost);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
