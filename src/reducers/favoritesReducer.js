import { FETCH_FAVORITE_GIFS } from '../actions/favoriteGifActions';

const INITIAL_STATE = { data: [] };

export default function favoriteGifReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FAVORITE_GIFS:
      // console.log('hitting fetchFavorite case reducer with payload: ', action.payload);
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
