import firebaseConfig from './firebase.config';
import { initializeApp } from "firebase/app";

const firebaseInitializeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}
export default firebaseInitializeAuthentication;