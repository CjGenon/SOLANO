  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  
  const button = document.getElementById("submit");

  const firebaseConfig = {
    apiKey: "AIzaSyAz8CoOb7k45On36GEQRcFPDxTvtdzU1ss",
    authDomain: "solanodb-a4f65.firebaseapp.com",
    projectId: "solanodb-a4f65",
    storageBucket: "solanodb-a4f65.firebasestorage.app",
    messagingSenderId: "98081894649",
    appId: "1:98081894649:web:67f3e3d0ef8d3b7a013228"
  };

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (userDoc.exists()) {
      const data = userDoc.data();
      switch (data.role) {
        case "admin":
          window.location.href = "admin.html";
          break;
        case "project_manager":
          window.location.href = "dashboard1.html";
          break;
        default:
          window.location.href = "dashboard.html";
      }
    } else {
      document.getElementById("status").innerText = "No role found for this user.";
    }
  } catch (error) {
    document.getElementById("status").innerText = "Login error: " + error.message;
  }
});
  