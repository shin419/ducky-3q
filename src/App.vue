<template>
  <router-view />
</template>

<script setup>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Qhbljgu5vvcHbDtkhRjX_XF5YBeYJ60",
  authDomain: "q-project-29d6e.firebaseapp.com",
  projectId: "q-project-29d6e",
  storageBucket: "q-project-29d6e.firebasestorage.app",
  messagingSenderId: "1068085314689",
  appId: "1:1068085314689:web:abcd6fdeb4fabe00c57980",
  measurementId: "G-VCXKTS8JW4",
  databaseURL: "https://q-project-29d6e-default-rtdb.firebaseio.com",
};

// Initialize Firebase
initializeApp(firebaseConfig);
</script>
