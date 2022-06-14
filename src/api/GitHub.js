const githubURL = "https://api.github.com";

async function search(loginPortion) {
  const res = await fetch(
    `${githubURL}/search/users?q=${loginPortion}in%3Alogin&per_page=5`
  );
  const data = await res.json();
  const users = [];
  data.items.map((user) =>
    users.push({
      login: user.login,
      avatarUrl: user.avatar_url,
    })
  );
  return users;
}

async function getUserInfo(login) {
  const res = await fetch(`${githubURL}/users/${login}`);
  const user = await res.json();

  if (user.message) return { message: "Not Found" };
  const {
    login: username,
    avatar_url: avatarUrl,
    html_url: url,
    public_repos: publicRepos,
    name,
    followers,
    following,
    id,
  } = user;
  return {
    username,
    avatarUrl,
    url,
    publicRepos,
    name,
    followers,
    following,
    id,
  };
}

async function getUserRepos(login, page = 1) {
  const res = await fetch(
    `${githubURL}/users/${login}/repos?per_page=4&page=${parseInt(page, 10)}`
  );
  const repos = await res.json();
  if (repos.length === 0) return [];
  const reposShort = [];
  repos.map((repo) => {
    const { name, description, html_url: url, id } = repo;
    return reposShort.push({ name, description, url, id });
  });
  return reposShort;
}

export { search, getUserInfo, getUserRepos };