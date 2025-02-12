function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data fetched successfully!");
    }, 2000);
  });
}

async function fetchAndProcess() {
  console.log("Fetching Data ... ");
  const data = await fetchData();
  console.log(data);
  console.log("Processing Data ... ");
}

fetchAndProcess();
