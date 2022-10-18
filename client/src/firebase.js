import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDWm-BCl6SutsVKKHLszQggXd2Ds8cTncw",
  authDomain: "fir-frontend-a8dfe.firebaseapp.com",
  projectId: "fir-frontend-a8dfe",
  storageBucket: "fir-frontend-a8dfe.appspot.com",
  messagingSenderId: "979405829507",
  appId: "1:979405829507:web:b2802d58b0aa01268fb2b6",
  measurementId: "G-K2223V3D0D"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)