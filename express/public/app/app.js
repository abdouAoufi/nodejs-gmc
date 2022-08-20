const noteInput = document.getElementById("note-input");
const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");
const listNotes = document.getElementById("list-notes");

let listNote = [];

addButton.addEventListener("click", () => {
  if (noteInput.value.length > 0) {
    listNote.push(noteInput.value);

    const html = listNote
      .map((note, index) => `<li> ${index + 1} ${note}</li>`)
      .join("");
    listNotes.innerHTML = html;

    fetch("http://localhost:3000/add-note", {
      method: "POST",
      body: JSON.stringify({ note: noteInput.value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json().then((data) => console.log(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

fetch("http://localhost:3000/notes", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((res) =>
  res.json().then((data) => {
    listNote = data.notes;
    const html = data.notes
      .map((note, index) => `<li> ${index + 1} ${note}</li>`)
      .join("");
    listNotes.innerHTML = html;
  })
);

removeButton.addEventListener("click", () => {
  fetch("http://localhost:3000/remove-notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json().then((data) => console.log(data)));
});
