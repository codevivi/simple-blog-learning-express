import express from "express";
import { engine } from "express-handlebars";
import { saveData, getData, getPostByInd } from "./src/db.js";
const PORT = 5000;

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  let posts = await getData();
  console.log(posts);
  res.render("home", { posts });
});

app.get("/post", async (req, res) => {
  let ind = req.query.id;
  let post = await getPostByInd(ind);
  if (post) {
    res.render("post", { post });
  } else {
    res.redirect("/");
  }
});

app.get("/add-post", (req, res) => {
  if (req.query && req.query.message) {
    res.render("add-post", { message: req.query.message });
  } else {
    res.render("add-post");
  }
});

app.post("/add-post", (req, res) => {
  if (req.body.title && req.body.content && req.body.description && req.body.img) {
    saveData(req.body);
    res.redirect("/");
  } else {
    res.redirect("./add-post?message=fill in all fields");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
