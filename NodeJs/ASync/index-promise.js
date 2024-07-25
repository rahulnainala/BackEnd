console.log("Before");
const p = getUser(1);
p.then((res) => {
  console.log(res);
  return getRepositories(res.gitHubUsername); // Return the promise from getRepositories
})
  .then((repos) => {
    console.log(repos);
    return getCommits(repos); // Return the promise from getCommits
  })
  .then((commits) => {
    console.log(commits); // Handle the final result here
  })
  .catch((err) => console.log("Error", err.message)); // Catch any error in the promise chain

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off async work
    setTimeout(() => {
      console.log("Reading a user from database....");
      resolve({ id: id, gitHubUsername: "Rahul" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API....");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API for Commit...");
      resolve(["Commit"]);
    }, 2000);
  });
}
