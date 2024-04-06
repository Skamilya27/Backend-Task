import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.get("/home", (req, res) => {
  res.send("<h1>welcome home</h1>");
});
app.get("/node", (req, res) => {
  res.send("<h1>welcome to my node Js project</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Welcome to About us page</h1>");
});

app.listen(4000, () => {
  console.log("App is listening at http://localhost:4000");
});
