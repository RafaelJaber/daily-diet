import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFyWTlNP2iS9yYvF1P0StpXdFUKF1cS2w",
  authDomain: "daily-diet-43b9a.firebaseapp.com",
  projectId: "daily-diet-43b9a",
  storageBucket: "daily-diet-43b9a.appspot.com",
  messagingSenderId: "412499743077",
  appId: "1:412499743077:web:df5366d31892d9b399918c",
  measurementId: "G-B6R84PZ8XC",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
