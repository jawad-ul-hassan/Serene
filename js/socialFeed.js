// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {
  query,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
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
const db = getFirestore(app);

const form = document.querySelector(".form");
const postArea = document.querySelector(".post-area");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const post = document.querySelector("#post").value;
  addDoc(collection(db, "posts"), {
    user: localStorage.getItem("user"),
    post: post,
    date: Date.now(),
  })
    .then(() => {
      // add post data to the top of the post area
      const postEl = document.createElement("div");
      postEl.classList.add("post");
      postEl.innerHTML = `
          <div class="post-header">
            <div class="post-user"><b>${localStorage.getItem("user")}</b></div>
            <div class="post-date">${new Date().toDateString()}</div>
          </div>
          <div class="post-body">${post}</div>
        `;
      postArea.prepend(postEl);
      form.reset();
    })
    .catch((err) => {
      alert(err);
    });
});

// Get posts and display them in the post area
const getPosts = async () => {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const posts = await getDocs(q);
  const snapshot = posts.docs.map((doc) => doc.data());
  snapshot.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
        <div class="post-header">
          <div class="post-user"><h2>${post.user}</h2></div>
          <div class="post-date">${new Date(post.date).toDateString()}</div>
        </div>
        <div class="post-body">${post.post}</div>
    `;
    postArea.appendChild(postEl);
  });
};

window.onload = async () => {
  await getPosts();
};
