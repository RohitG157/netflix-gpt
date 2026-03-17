import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { MESSAGE } from "./constant";

export const createAnAccount = async (email, password) => {
  try {
    const response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return MESSAGE.GENERIC_ERROR;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.log(error.code);
    return MESSAGE.ERROR_CODE[error.code];
  }
};

export const signOutUser = async () => {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error) {
    return MESSAGE.GENERIC_ERROR;
  }
};

export const updateUser = async (name) => {
  try {
    const response = await updateProfile(auth.currentUser, {
      displayName: name,
    });
    return response;
  } catch (error) {
    return MESSAGE.GENERIC_ERROR;
  }
};
