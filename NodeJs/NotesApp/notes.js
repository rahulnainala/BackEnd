const fs = require("fs");

const getNotes = function () {};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    if (note.title === title || note.body === body) {
      return note;
    }
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note Added !");
  } else {
    console.log("Note Title Taken");
  }
};

const removeNote = function (title, body) {
  const notes = loadNotes();
  const findNote = notes.filter(function (note) {
    return note.title === title || note.body === body;
  });
  if (findNote.length === 0) {
    console.log("No such Note exist");
  } else {
    const updatedNotes = notes.filter(function (note) {
      return note.title !== title && note.body !== body;
    });
    saveNotes(updatedNotes);
    console.log("Note Removed Successfully");
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return []; //if no file called notes.json is there
  }
};

const saveNotes = function (notes) {
  try {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJson);
  } catch (e) {
    console.error("error faced at ", e);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
