import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
// import { traitsDescripton } from "../utils/descriptiondb-temp";

const firebaseConfig = {
  apiKey: "AIzaSyCFNUBei1LCHuQUxnPdOy_2cvCnT72Te0k",
  authDomain: "innovative-mojo-r.firebaseapp.com",
  projectId: "innovative-mojo-r",
  storageBucket: "innovative-mojo-r.appspot.com",
  messagingSenderId: "283784436090",
  appId: "1:283784436090:web:d46c9eb8e6c3adc95adec3",
};

require("firebase/functions");

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
export { firebaseConfig };
