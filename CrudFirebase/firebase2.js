// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyCOpEgLQTWT7gAS4G9NI85tknLM6xQFkYQ",
    authDomain: "crud-826c3.firebaseapp.com",
    databaseURL: "https://crud-826c3-default-rtdb.firebaseio.com",
    projectId: "crud-826c3",
    storageBucket: "crud-826c3.appspot.com",
    messagingSenderId: "410590825690",
    appId: "1:410590825690:web:4ea91a59014e4f6ddd29e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => {

    addDoc(collection(db, 'CLASES'), {title, description})
}

export const saveTaskE = (nombre, apellidos) => {

    addDoc(collection(db, 'Estudiantes'), {nombre, apellidos})
}

export const saveTaskM = (IdMatricula, IdEstudiante, IdClase) => {

    addDoc(collection(db, 'Matriculas'), {IdMatricula, IdEstudiante, IdClase})
}

export const getTask = () => getDocs(collection(db, 'CLASES'))

export const getTaskE = () => getDocs(collection(db, 'Estudiantes'))

export const getTaskM = () => getDocs(collection(db, 'Matriculas'))