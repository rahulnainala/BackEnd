const request = require("postman-request");

const url =
  "https://api.weatherstack.com/current?access_key=e54281e6531e4fddf1ac713fc9ff2606&query=new%20delhi&units=m";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(
    "It is currently " +
      data.current.temperature +
      " degrees out." +
      " it feels like " +
      data.current.feelslike
  );
});
