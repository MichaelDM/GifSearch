import { combineReducers } from 'redux';
import GifsReducer from './gifsReducer';
import ModalReducer from './modalReducer';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './authReducer';
import FavoritesReducer from './favoritesReducer';
import SearchTermReducer from './searchTermReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer,
  auth: AuthReducer,
  fav: FavoritesReducer,
  term: SearchTermReducer,
});

export default rootReducer;
