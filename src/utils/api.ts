import axios from 'axios';

export async function fetchRepos() {
  const { data } = await axios.get(
    'https://api.github.com/users/henriquekrs/repos'
  );
  return data;
}
