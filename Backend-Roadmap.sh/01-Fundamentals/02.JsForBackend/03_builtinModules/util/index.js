const util = require("util");

const setTimeoutPromise = util.promisify(setTimeout);

async function delayMessage() {
  console.log("Wait for 2 seconds .... ");
  await setTimeoutPromise(2000);
  console.log("Done !");
}

delayMessage();
