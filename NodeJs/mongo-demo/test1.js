const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test1")
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
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  try {
    // Find all courses and log to verify connection and data retrieval
    const allCourses = await Course.find();
    // console.log("All Courses:", allCourses);

    // Now find the specific courses with the given criteria
    const courses = await Course.find({ isPublished: true, tags: "backend" })
      .sort("name")
      .select("name author");

    console.log("Filtered Courses:", courses);
    return courses;
  } catch (err) {
    console.error("Error fetching courses:", err);
  }
}

async function run() {
  const courses = await getCourses();
  console.log("Final Courses:", courses);
}

run();
