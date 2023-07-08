import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASs0ElGRgZPzLhIg12Phi4VsLR01Stml0",
  authDomain: "twitter-clone-94e5d.firebaseapp.com",
  projectId: "twitter-clone-94e5d",
  storageBucket: "twitter-clone-94e5d.appspot.com",
  messagingSenderId: "165240129580",
  appId: "1:165240129580:web:fb35730ba4bbb9e9aba989",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
