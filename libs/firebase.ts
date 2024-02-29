import { initializeApp } from "firebase/app"

const firebaseConfig = {
 apiKey: process.env.FIREBASE_API_KEY,
 authDomain: "ecommerce-app-47e5a.firebaseapp.com",
 projectId: "ecommerce-app-47e5a",
 storageBucket: "ecommerce-app-47e5a.appspot.com",
 messagingSenderId: "15385627610",
 appId: "1:15385627610:web:7d89217bde0658c431cee3"
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp