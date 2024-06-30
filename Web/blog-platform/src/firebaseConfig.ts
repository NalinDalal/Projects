// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg6J1HPTmsb9wS3OE4B6nU_prJOnjxgu0",
  authDomain: "react-quill-editor-f04fa.firebaseapp.com",
  projectId: "react-quill-editor-f04fa",
  storageBucket: "react-quill-editor-f04fa.appspot.com",
  messagingSenderId: "1086321781315",
  appId: "1:1086321781315:web:b9a93c8f3d39da2747c2f6",
  measurementId: "G-2JZZHTCMZH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

/* 
 Project name :react-quill-editor
Project ID: react-quill-editor-f04fa
Project number: 1086321781315
Web API key: AIzaSyAg6J1HPTmsb9wS3OE4B6nU_prJOnjxgu0
Environment
    This setting customises your project for different stages of the app lifecycle
Environment type: Unspecified
Public settings
    These settings control instances of your project shown to the public
Public-facing name 
project-1086321781315
pport email
nalindalal2004@gmail.com
 */
