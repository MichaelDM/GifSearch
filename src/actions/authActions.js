import { browserHistory } from 'react-router';
import Firebase from 'firebase';
import { firebaseAuth } from '../firebase/firebase';

export function signUpUser(credentials) {
  // console.log('email is', credentials.email , ' password is ', credentials.password);
  return dispatch => {
    firebaseAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then( res => {
      dispatch(signInUser(credentials, {isAuth: true}));
    }, error => {
        // console.log('there was an error ', error);
        dispatch(authError(error));
    });
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
export const AUTH_ERROR = 'AUTH_ERROR';


const signInHelper = dispatch => {
  dispatch({ type: SIGN_IN_USER});
  browserHistory.push('/favorites');
}
export function signInUser(credentials, signup={isAuth: false}) {
  return dispatch => {
    if(signup.isAuth) {
      // console.log('login: isAuth is pushed');
      signInHelper(dispatch);
    } else {
      firebaseAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then( res => {
        // console.log('login: user recognized');
        signInHelper(dispatch);
      }, error => {
          // console.log('login: there was an error ', error);
          return dispatch(authError(error));
      });
    }
  }
}
export const SIGN_IN_USER = 'SIGN_IN_USER';

export function signOutUser() {
  return dispatch => {
    firebaseAuth.signOut()
    .then( () => {
      // console.log('sign-out successful');
      browserHistory.push('/login');
      dispatch({ type: SIGN_OUT_USER });
    }, error => {
      // console.log('error signin out');
    });
  }

}
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export function authenticateUser() {
  return dispatch => {
    if (firebaseAuth.onAuthStateChanged(user => {
      // console.log('authenticationUserAction: user is ', user);
      if (user) {
        // console.log('auth positive');
        dispatch({type: SIGN_IN_USER});
      } else {
        dispatch({type: SIGN_OUT_USER});
        // console.log('auth negative');
      }
    }));
  }
}
