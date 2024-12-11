// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
    


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAISn_J56LAmI0bCXxvMfmX_qkILkXgRgM",
  authDomain: "financely-rec-4133c.firebaseapp.com",
  projectId: "financely-rec-4133c",
  storageBucket: "financely-rec-4133c.appspot.com",
  messagingSenderId: "631109273370",
  appId: "1:631109273370:web:4e8178f68763ca7c8dcea3",
  measurementId: "G-B0FGH50C93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc }; 