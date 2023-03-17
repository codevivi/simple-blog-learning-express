import express from "express";
import { engine } from "express-handlebars";
import { save } from "./src/save-to-json-db.js";
const PORT = 5000;

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/add-post", (req, res) => {
  if (req.query && req.query.message) {
    res.render("add-post", { message: req.query.message });
  } else {
    res.render("add-post");
  }
});

app.post("/add-post", (req, res) => {
  console.log(req.body);
  if (req.body.title && req.body.content && req.body.description && req.body.img) {
    console.log(req.body);
    save(req.body);
    // console.log("there you should save");
    res.redirect("/");
  } else {
    res.redirect("./add-post?message=fill in all fields");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
