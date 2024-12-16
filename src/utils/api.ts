import axios from 'axios';

export async function fetchRepos() {
  const { data } = await axios.get(
    'https://api.github.com/users/henriquekrs/repos'
  );
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].name === 'Henriquekrs' ||
      data[i].name === 'pessoal-portifolio'
    ) {
      data.splice(i, 1);
    }
  }

  return data;
}
