import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { constants } from "buffer";
import fs from "fs";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.send(
    '<body><form action="/" method="POST" onSubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><input type="text" name="login" id="username"><button type="submit">Send</button></form></body>'
  );
});

app.get("/", (req, res, next) => {
  fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
    }

    res.send(
      `${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST"><input id="message" type="text" name="message" placeholder="message"><input id="username" type="hidden" name="username"><button type="submit">add</button></form>`
    );
  });
});

app.use("/", (req, res) => {
  let data = `${req.body.username}:${req.body.message} `;

  fs.appendFile("message.txt", data, (err) => {
    if (err) {
      console.log("error in file writting" + err);
    }
  });
  res.redirect("/");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
