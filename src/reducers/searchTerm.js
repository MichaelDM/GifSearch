import { SEARCH_TERM } from '../actions/searchtermActions';

const INITIAL_STATE = {term: ''};

export default function searchTermReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_TERM:
    console.log('reducer will return payload', action.payload);
      return {...state, term: action.payload};
    default:
      return state;
  }
}
