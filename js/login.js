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
  query,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcH8nGdHT_oz_wkeu9mOZQ9ODlrVrcavg",
  authDomain: "serene-f9cf3.firebaseapp.com",
  projectId: "serene-f9cf3",
  storageBucket: "serene-f9cf3.appspot.com",
  messagingSenderId: "766948746277",
  appId: "1:766948746277:web:e2d1a38de1346d8c1e4bcc",
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
      const q = query(collection(db, "users"), where("email", "==", email));
      getDocs(q)
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
