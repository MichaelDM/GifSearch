import firebase from 'firebase';
import { firebaseConfig } from './firebase.config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
