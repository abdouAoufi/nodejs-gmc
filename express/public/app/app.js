const noteInput = document.getElementById("note-input");
const addButton = document.getElementById("add-button");
const listNotes = document.getElementById("list-notes");

const listNote = [];

addButton.addEventListener("click", () => {
  if (noteInput.value.length > 0) {
    listNote.push(noteInput.value);
  }
  const html = listNote
    .map((note, index) => `<li> ${index+1} ${note}</li>`)
    .join("");

  listNotes.innerHTML = html;
});
