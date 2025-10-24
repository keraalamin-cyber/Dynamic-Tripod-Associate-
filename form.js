const firebaseConfig = {
  apiKey: "AIzaSyBF2ZtFGlVlOhOg-3dwSHk5x_NN3WG3tTk",
  authDomain: "dynamic-tripod-associate-1bf5f.firebaseapp.com",
  projectId: "dynamic-tripod-associate-1bf5f",
  storageBucket: "dynamic-tripod-associate-1bf5f.firebasestorage.app",
  messagingSenderId: "743471659639",
  appId: "1:743471659639:web:b7faf53ecf2ce824602472"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
document.getElementById('staffForm').addEventListener('submit', async (e) => {
 e.preventDefault();
 const data = {
  fullName: fullName.value,
  email: email.value,
  phone: phone.value,
  department: department.value,
  bankName: bankName.value,
  accountNumber: accountNumber.value,
  createdAt: new Date().toISOString()
 };
 try {
  await db.collection('submissions').add(data);
  message.textContent = 'Submission successful!';
  staffForm.reset();
 } catch (error) {
  message.textContent = 'Error: ' + error.message;
 }
});
