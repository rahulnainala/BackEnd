const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
};

const processData = async () => {
  const data = await fetchData();
  console.log(data); // "Data fetched"
  return "Processed data";
};

const displayData = async () => {
  const processed = await processData();
  console.log(processed); // "Processed data"
};

displayData();
