// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAG7mroIJtKsCX9EpaFl2c9Vqhj3ltbQYY',
	authDomain: 'mini-blog-6c409.firebaseapp.com',
	projectId: 'mini-blog-6c409',
	storageBucket: 'mini-blog-6c409.appspot.com',
	messagingSenderId: '195257282279',
	appId: '1:195257282279:web:1ab31d6a87cdb5a3417c42',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Data-Base
const db = getFirestore(app)
export { db }
