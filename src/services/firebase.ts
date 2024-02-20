import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAeCYcRtFVCXfRaKVJdPrIwAn-rnvYthrc",
  authDomain: "dataquiz-app.firebaseapp.com",
  projectId: "dataquiz-app",
  storageBucket: "dataquiz-app.appspot.com",
  messagingSenderId: "44117014189",
  appId: "1:44117014189:web:ca650604f5051c479bf824"
}

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)