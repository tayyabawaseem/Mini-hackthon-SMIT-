// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC39f-N3qGIt1PVncwWwFOwqFmzs-W1t4M",
    authDomain: "mini-project-a144d.firebaseapp.com",
    projectId: "mini-project-a144d",
    storageBucket: "mini-project-a144d.firebasestorage.app",
    messagingSenderId: "1003849524118",
    appId: "1:1003849524118:web:ee4b4d94131ddaf34df3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle form submission
document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save data to Firebase Realtime Database
    set(ref(db, 'user/' + username), {
        username: username,
        email: email,
        message: message
    })
    .then(() => {
        alert('Data saved successfully😊');
    })
    .catch((error) => {
        alert('Error saving data: ' + error.message);
    });
});
