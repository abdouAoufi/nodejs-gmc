const fs = require("fs/promises");

const createTextFile = () => {
  // fs.writeFileSync("file.txt", "we love node js", "utf-8"); // block process
  fs.writeFile(
    "data.json",
    `{ "name" : "islem" }`,
    "utf-8",
    function (err, data) {
      if (err) {
      }
      console.log("file created");
    }
  );
  fs.writeFile("file2.txt", "content", "utf-8").then(() => {
    console.log("file created");
  });
};

const readTextFile = (path) => {
  // const resultSync = fs.readFileSync("file.txt", "utf-8");
  fs.readFile(path, "utf-8", function (err, data) {
    if (err) {
      return console.log("this file does not exist");
    }
    const result = JSON.parse(data);
    console.log(result.name);
  });
  // console.log(resultSync)
  console.log("reading finished!");
};

const deleteFile = (path) => {
  fs.unlinkSync(path);
};

const renameFile = (path) => {
  fs.renameSync(path, "newFileFile.json");
};

// createTextFile();
// readTextFile("data.json");
// deleteFile("file.txt");
// renameFile("./data.json");

// console.log(process.cwd())

readTextFile(process.cwd() + "/newFileFile.json");
