//Async and Await Approach
console.log("Before");

async function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off async work
    setTimeout(() => {
      console.log("Reading a user from database....");
      resolve({ id: id, gitHubUsername: "Rahul" });
    }, 2000);
  });
}

async function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API....");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

async function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API for Commit...");
      resolve(["Commit"]);
    }, 2000);
  });
}

async function displayComits() {
  try {
    const user = await getUser(1);
    console.log(user);
    const repos = await getRepositories(user.gitHubUsername);
    console.log(repos);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    throw new Error(err.message);
  }
}
displayComits();
console.log("After");
