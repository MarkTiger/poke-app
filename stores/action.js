import { ISLOADING_SET, POKEMONS_SET } from './actionType';

const baseURL = 'https://pokeapi.co/api/v2';

export function setIsLoading(bool) {
  return {
    type: ISLOADING_SET,
    payload: bool,
  };
}

export function setPokemons(pokemons) {
  return {
    type: POKEMONS_SET,
    payload: pokemons,
  };
}

export function fetchPokemons() {
  return async function (dispatch, getData) {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(baseURL + '/pokemon');
      const data = await response.json();

      const pokemons = await Promise.all(
        data.results.map(async ({ url }) => {
          return await (await fetch(url)).json();
        })
      );

      dispatch(setPokemons(pokemons));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
}
