import axios from 'axios';
const URL = `https://pokeapi.co/api/v2`;

export const loadPokemons = () => {
  const endpoint = 'pokemon';
  axios.get(`${URL}/pokemon`).then(function (response) {
    const pokemons = response.data.results;
    console.log(pokemons);
  });
};
