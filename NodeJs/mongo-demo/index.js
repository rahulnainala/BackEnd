const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Couldn't connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

//to create a data
async function createCourse() {
  const course = new Course({
    name: "NodeJs Course",
    author: "Drac",
    tags: ["node", "Js"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

// createCourse();

//to find a data
async function getCourses() {
  const courses = await Course.find({ author: /.*ra.*/, isPublished: true });
  console.log(courses);
}
getCourses();
