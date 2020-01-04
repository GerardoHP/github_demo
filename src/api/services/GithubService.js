const baseUrl = 'https://api.github.com';
export const getUserRepos = username => {
  const url = `${baseUrl}/users/${username}/repos`;
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      if (res.status === 404) {
        throw new Error('User not found');
      }

      throw new Error('Unknown error');
    })
    .catch(err => {
      throw err;
    });
};
