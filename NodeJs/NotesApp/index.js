const fs = require("fs");
const yargs = require("yargs");
const notes = require("./notes.js");

//add,remove,read,list

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//creates a remove command
yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title, argv.body);
  },
});

//creates a read command
yargs.command({
  command: "read",
  describe: "Read a Note",
  handler: function () {
    console.log("Reading a note");
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "List all Notes",
  handler: function () {
    console.log("Listing all Notes");
  },
});

yargs.parse();
