const asyncFunc = async () => {
  throw new Error("Something went wrong");
};

(async () => {
  try {
    await asyncFunc();
  } catch (error) {
    console.error("Error caught:", error.message);
  }
})();
