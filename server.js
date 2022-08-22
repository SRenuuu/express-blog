const express = require("express");
const blogData = require("./data/blog.json");

const app = express();

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/blog", (req, res) => {
  res.render("blog", { blogData, heroTitle: "Blog" });
});

app.get("/about", (req, res) => {
  res.render("about", { heroTitle: "About" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
