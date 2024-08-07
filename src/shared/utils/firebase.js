import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCpc--B4s8eiryzHw1ymoLPsOBkMw4dqvs',
  authDomain: 'steady-dryad-388508.firebaseapp.com',
  projectId: 'steady-dryad-388508',
  storageBucket: 'steady-dryad-388508.appspot.com',
  messagingSenderId: '549388992911',
  appId: '1:549388992911:web:03eb6af1022b4445f60bfa',
};

const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
