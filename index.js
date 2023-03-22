import express from "express";
import { engine } from "express-handlebars";
import { savePost, getPostByInd } from "./src/db.js";
import { homePage } from "./src/view-controllers/home-page.js";
import { postPage } from "./src/view-controllers/post-page.js";
import { addPostPage } from "./src/view-controllers/add-post-page.js";
import { addPost } from "./src/controllers/add-post.js";
const PORT = 5000;

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", homePage);
app.get("/post/:id", postPage);
app.get("/add-post", addPostPage);

app.post("/add-post", addPost);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
