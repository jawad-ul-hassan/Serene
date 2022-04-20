// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  doc,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfr5JxEnZay7bcDSRSbod-BT9qJvv2IFQ",
  authDomain: "serene-4161c.firebaseapp.com",
  projectId: "serene-4161c",
  storageBucket: "serene-4161c.appspot.com",
  messagingSenderId: "1013532091693",
  appId: "1:1013532091693:web:7a81eb71186ed251c25fa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      getDocs(collection(db, "users"), where("uid", "==", cred.user.uid))
        .then((snapshot) => {
          const user = snapshot.docs[0].data();
          localStorage.setItem("user", user.username);
          window.location.href = "./index.html";
        })
        .catch((err) => {
          alert(err.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
});
