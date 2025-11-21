import { updatePassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { updateDoc, doc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

document.getElementById('changePasswordForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const newPassword = document.getElementById('newpassword').value;

  const user = auth.currentUser;

  try {
    await updatePassword(user, newPassword);
    await updateDoc(doc(db, "users", user.uid), { mustChangePassword: false });

    document.getElementById("status").innerText = "Password changed successfully!";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText = "Error: " + error.message;
  }
});