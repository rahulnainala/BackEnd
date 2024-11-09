const fs = require("fs");

// fs.writeFileSync("notes.txt", "This file has been edited");

fs.appendFileSync("notes.txt", "\nThis text is appended Fix");
