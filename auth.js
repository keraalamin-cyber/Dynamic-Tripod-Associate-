const firebaseConfig = {
  apiKey: "AIzaSyBF2ZtFGlVlOhOg-3dwSHk5x_NN3WG3tTk",
  authDomain: "dynamic-tripod-associate-1bf5f.firebaseapp.com",
  projectId: "dynamic-tripod-associate-1bf5f",
  storageBucket: "dynamic-tripod-associate-1bf5f.firebasestorage.app",
  messagingSenderId: "743471659639",
  appId: "1:743471659639:web:b7faf53ecf2ce824602472"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
document.getElementById('loginForm').addEventListener('submit', (e) => {
 e.preventDefault();
 const email = adminEmail.value;
 const password = adminPassword.value;
 auth.signInWithEmailAndPassword(email, password)
  .then(() => window.location.href = 'admin.html')
  .catch(error => loginMessage.textContent = 'Login failed: ' + error.message);
});
