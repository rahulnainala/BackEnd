const response = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;
    if (success) {
      resolve("✅ Data fetched successfully!");
    } else {
      reject("❌ Error fetching data.");
    }
  }, 2000);
});

response
  .then((message) => console.log(message)) // Executes when resolved
  .catch((error) => console.log(error)) // Executes when rejected
  .finally(() => console.log("Process completed.")); // Executes always
