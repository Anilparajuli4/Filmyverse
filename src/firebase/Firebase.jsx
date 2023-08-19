import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsiXcLfbOo5Xk7mgQkH8SI99Z0UbHnDk",
  authDomain: "fimy-verse.firebaseapp.com",
  projectId: "fimy-verse",
  storageBucket: "fimy-verse.appspot.com",
  messagingSenderId: "314433482229",
  appId: "1:314433482229:web:7c7a97e59f46929cf504bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieRef = collection(db, "movies");

export default app;
