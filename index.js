import express from "express";
import { engine } from "express-handlebars";
import { homePage } from "./src/view-controllers/home-page.js";
import { postPage } from "./src/view-controllers/post-page.js";
import { loginPage } from "./src/view-controllers/login-page.js";
import { addPostPage } from "./src/view-controllers/add-post-page.js";
import { addPost } from "./src/controllers/add-post.js";
import { protect } from "./src/middleware/protect.js";
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
    saveUninitialized: false,
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

app.get("/", homePage);
app.get("/login", loginPage);
app.get("/logout", protect, logout);
app.get("/post/:id", protect, postPage);
app.get("/add-post", protect, addPostPage);

app.post("/login", login);
app.post("/add-post", protect, addPost);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
