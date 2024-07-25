//Implementation of Callback Functions

console.log("Before");
getUser(1, (user) => {
  console.log("user", user);
  getRepos(user.gitHubUserName, (repos) => console.log("Repos:", repos));
});
console.log("After");

//callback functions
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ id: id, gitHubUserName: "Rahul" });
  }, 2000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    console.log("Calling github API");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
