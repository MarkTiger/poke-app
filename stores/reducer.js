import { ISLOADING_SET, POKEMONS_SET } from './actionType';

const initialState = {
  pokemons: [],
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ISLOADING_SET:
      return {
        ...state,
        isLoading: action.payload,
      };
    case POKEMONS_SET:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}
