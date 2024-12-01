const fetchData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data1"), 1000));

const fetchData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data2"), 1400));

//Promise.all() => waits for all promises to resolve and then gives the solution
const fetchAllData = async () => {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log(data1, data2);
};

fetchAllData();

//.race gives the value of the promise which resolves first or rejects first
const raceData = async () => {
  const result = await Promise.race([fetchData1(), fetchData2()]);
  console.log(result); // "Data 2"
};

raceData();
