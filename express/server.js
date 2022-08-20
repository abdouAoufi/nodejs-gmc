const express = require("express");
const utils = require("./utils/utils");
const fs = require("fs");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.post("/add-note", (req, res, next) => {
  fs.readFile(utils.databaseURL, "utf-8", (err, result) => {
    if (err) {
      return res.send({ message: "Something went wrong" });
    }
    const currentContent = JSON.parse(result);
    const listNotes = currentContent.notes || [];
    listNotes.push(req.body.note);
    fs.writeFile(
      utils.databaseURL,
      JSON.stringify({ notes: listNotes }),
      "utf-8",
      (err, fsRes) => {
        if (err) {
          return res.send({ message: "Something went wrong" });
        }
        res.send({ message: "File saved " });
      }
    );
  });
});

app.post("/remove-notes", (req, res, next) => {
  fs.writeFile(
    utils.databaseURL,
    JSON.stringify({ notes: [] }),
    "utf-8",
    (err, result) => {
      res.send({ message: "all notes deleted" });
    }
  );
});

app.get("/notes", (req, res, next) => {
  fs.readFile(utils.databaseURL, "utf-8", (err, result) => {
    if (err) {
      return res.send({ message: "Something went wrong" });
    }
    res.send(result);
  });
});

app.use("*", (req, res, next) => {
  res.redirect("/404.html");
});

app.listen(utils.SERVER_PORT, () => {
  console.log("SERVER IS UP AT PORT:", utils.SERVER_PORT);
});
