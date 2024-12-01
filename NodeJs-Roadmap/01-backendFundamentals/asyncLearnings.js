const asyncFunc = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello World from Async Function");
      resolve();
    }, 0);
  });
};

await asyncFunc();

const asyncFunc2 = async () => {
  setTimeout(() => {
    console.log("Imagine this is a API call and returns some value");
  }, 20);
};

await asyncFunc2();

console.log("Hello world");
