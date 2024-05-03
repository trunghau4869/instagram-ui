import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAciAhlxTYlk3PsJT0KHYnIZ6L3ts3Csxw",
  authDomain: "instagram-ui-8e818.firebaseapp.com",
  projectId: "instagram-ui-8e818",
  storageBucket: "instagram-ui-8e818.appspot.com",
  messagingSenderId: "840024329130",
  appId: "1:840024329130:web:9f704721295b5bdcd679d3",
  measurementId: "G-651M48NES1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
