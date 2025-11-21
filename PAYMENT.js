// Firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz8CoOb7k45On36GEQRcFPDxTvtdzU1ss",
    authDomain: "solanodb-a4f65.firebaseapp.com",
    projectId: "solanodb-a4f65",
    storageBucket: "solanodb-a4f65.firebasestorage.app",
    messagingSenderId: "98081894649",
    appId: "1:98081894649:web:67f3e3d0ef8d3b7a013228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Check if user is logged in
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userId = user.uid;
    loadPayments(userId);
  } else {
    alert("Please login first.");
  }
});

async function loadPayments(userId) {
  const paymentsRef = collection(db, "payments", userId, "history");
  const q = query(paymentsRef);
  const querySnapshot = await getDocs(q);
  const tbody = document.getElementById("paymentBody");

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${data.date}</td>
      <td>₱ ${parseFloat(data.amount).toFixed(2)}</td>
      <td>${data.status}</td>
      <td>${data.description}</td>
    `;

    tbody.appendChild(tr);
  });
}
