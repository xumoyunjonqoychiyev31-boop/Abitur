// Fon rejimida (sayt yopiq) bildirishnomani qabul qiladi. Saytning ildiz papkasiga qo'ying.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// index.html dagi FB_CFG bilan bir xil bo'lishi kerak
firebase.initializeApp({
  apiKey: "AIzaSyCGuSuwXwFhhrDldrAWUPQRMGjl64OnrkM",
  authDomain: "abiturdtm-171ae.firebaseapp.com",
  projectId: "abiturdtm-171ae",
  messagingSenderId: "614140602156",
  appId: "1:614140602156:web:f3e800653476e687d46e89"
});

firebase.messaging();
