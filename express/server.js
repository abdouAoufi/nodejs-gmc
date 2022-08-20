const express = require("express");
const utils = require("./utils/utils");

const app = express();

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  res.redirect("/404.html");
});

app.listen(utils.SERVER_PORT, () => {
  console.log("SERVER IS UP AT PORT:", utils.SERVER_PORT);
});
