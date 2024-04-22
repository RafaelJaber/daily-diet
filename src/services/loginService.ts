import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { FIREBASE_AUTH } from "@/services/firebaseConfig";

type loginProps = {
  email: string;
  password: string;
};

export async function login({ email, password }: loginProps) {
  return await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

export async function register({ email, password }: loginProps) {
  return await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

export function getUser() {
  return getAuth().currentUser;
}

export async function logout() {
  const auth = getAuth();
  return await signOut(auth);
}
