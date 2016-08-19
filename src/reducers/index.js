import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';
import FavoritesReducer from './favorites';
import SearchTermReducer from './searchTerm';

const rootReducer = combineReducers({
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer,
  auth: AuthReducer,
  fav: FavoritesReducer,
  term: SearchTermReducer,
});

export default rootReducer;
