// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9R1--7Vwzmld-Tu7b3MbMjCpvIDOkayE",
    authDomain: "nextproject-9c19b.firebaseapp.com",
    projectId: "nextproject-9c19b",
    storageBucket: "nextproject-9c19b.appspot.com",
    messagingSenderId: "579701982606",
    appId: "1:579701982606:web:0ff5a93d9c8258a4ac50df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;