function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

console.log("Start fetching data...");
fetchData(processData);
console.log("Fetching started...");

//Callback Hell
// Below is the Example of a callback Hell
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

// Callback Hell Example
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});
