// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log("Customer :", customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log("Top Movies: ", movies);
    await sendEmail(customer.email, movies);
    console.log("Email Sent...");
  }
}
notifyCustomer();

function getCustomer(id) {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((res) => {
    setTimeout(() => {
      res(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 4000);
  });
}
