const path = require("path");

// Get the file name and directory
console.log("Directory:", __dirname);
console.log("File:", __filename);

// Join paths
const filePath = path.join(__dirname, "folder", "file.txt");
console.log("Full Path:", filePath);

// Extract file extension
console.log("Extension:", path.extname(filePath));
