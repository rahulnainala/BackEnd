console.log(process.argv);
const command = process.argv[2];

if (command === "Add") {
  console.log("user added");
} else if (command === "Delete") {
  console.log("user Deleted");
} else {
  console.log("Default");
}
