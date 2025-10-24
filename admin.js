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
const db = firebase.firestore();
auth.onAuthStateChanged(user => {
 if(!user) window.location.href='login.html';
 else loadData();
});
async function loadData(){
 const tbody=document.querySelector('#staffTable tbody');
 tbody.innerHTML='';
 const snapshot=await db.collection('submissions').orderBy('createdAt','desc').get();
 snapshot.forEach(doc=>{
  const d=doc.data();
  const row=`<tr><td>${d.fullName}</td><td>${d.email}</td><td>${d.phone}</td><td>${d.department}</td><td>${d.bankName}</td><td>${d.accountNumber}</td></tr>`;
  tbody.insertAdjacentHTML('beforeend',row);
 });
}
logoutBtn.onclick=()=>auth.signOut().then(()=>window.location.href='login.html');
