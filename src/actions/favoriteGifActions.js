import Firebase from 'firebase';
import { firebaseAuth, firebaseDb } from '../firebase/firebase';

export function fetchFavoritedGifs() {
  return dispatch => {
    if(!firebaseAuth.currentUser){
      return console.log('problem getting current user. FirebaseAuth is ', firebaseAuth, 'and current user is ', firebaseAuth.currentUser);
    }
    const userID = firebaseAuth.currentUser.uid;
    const gifRef = firebaseDb.ref(`${userID}/`);
    gifRef.on('value', data => {
      let formatedObject = {data: []};
      const gifObject = data.val();
      for (let gif in gifObject) {
        formatedObject.data.push(gifObject[gif].gifInfo);
      }
      dispatch({type: FETCH_FAVORITE_GIFS, payload: formatedObject});
    });
  }
}
export const FETCH_FAVORITE_GIFS = 'FETCH_FAVORITE_GIFS';


export function addFavoriteGif(gif) {
  const userID = firebaseAuth.currentUser.uid;
  const gifID = gif.id;
  return dispatch => {
    firebaseDb.ref(`${userID}/` + gifID).set({ gifInfo: gif })
    .catch( err => console.log('error in addFavorite Action ', err));
  }
}

export function removeFavoriteGif(gif) {
  const userID = firebaseAuth.currentUser.uid;
  const gifID = gif.id;
  return dispatch => {
    firebaseDb.ref(`${userID}/` + gifID).remove()
    .catch( err => console.log('error in addFavorite Action ', err));
  }
}
