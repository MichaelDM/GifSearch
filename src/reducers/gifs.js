import { REQUEST_GIFS } from '../actions/gifActions';

const INITIAL_STATE = { data: [] };

export default function(state=INITIAL_STATE, action) { //state only refers to the state this reducer is responsible for
  switch (action.type) {
    case REQUEST_GIFS:
      return { ...state, data: action.payload.body.data };
    default:
      return state;
  }
}
