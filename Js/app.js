  // Import the Firebase functions
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

  // Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyC39f-N3qGIt1PVncwWwFOwqFmzs-W1t4M",
      authDomain: "mini-project-a144d.firebaseapp.com",
      databaseURL: "https://mini-project-a144d-default-rtdb.firebaseio.com",
      projectId: "mini-project-a144d",
      storageBucket: "mini-project-a144d.firebasestorage.app",
      messagingSenderId: "1003849524118",
      appId: "1:1003849524118:web:ee4b4d94131ddaf34df3b7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form reload

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Save data to Firebase Realtime Database
      push(ref(database, "Mini-project"), {
          name: name,
          email: email,
          message: message
      }).then(() => {
          alert("Data saved successfully😊😊");
          document.getElementById("contactForm").reset(); // Clear the form
      }).catch((error) => {
          alert("Error: " + error.message);
      });
  });