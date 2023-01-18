import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_8iB2riB8jCOM3mdhpsnl8Yw5l3WCzAs",
  authDomain: "auth-41513.firebaseapp.com",
  projectId: "auth-41513",
  storageBucket: "auth-41513.appspot.com",
  messagingSenderId: "1012071041165",
  appId: "1:1012071041165:web:8a87b531ce27026c07bac4",
  measurementId: "G-DS624XMRMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      console.error(result.user.displayName);
      // const email = result.user.email;
      // const photo = result.user.photoURL;

      localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("photo", photo);
    })
    .catch((error) => {
      console.log(error);
    });
};
