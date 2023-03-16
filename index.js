import express from "express";
import { engine } from "express-handlebars";
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
  res.render("add-post");
});

app.post("/add-post", (req, res) => {
  console.log("bla");
  console.log(req.body);
  //   res.render("add-post");
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
