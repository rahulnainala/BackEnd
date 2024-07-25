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
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({
    isPublished: true,
    // tags: {
    //   $in: ["frontend", "backend"],
    // },
  })
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort({ price: -1 })
    .select("name author price");
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
