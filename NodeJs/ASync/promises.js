const prom = new Promise((resolve, reject) => {
  //Kick of some async work
  setTimeout(() => {
    resolve(2);
    // reject(new Error("message"));
  }, 2000);
});

console.log(prom);
prom.then((e) => console.log(e)).catch((err) => console.log(err));
