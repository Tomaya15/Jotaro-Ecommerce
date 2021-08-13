import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
   apiKey: "AIzaSyAgUfIVHnwn5w5ZMjPxfxt2R-FQpx5sXjU",
   authDomain: "coderhouse-ecommerce-51d80.firebaseapp.com",
   projectId: "coderhouse-ecommerce-51d80",
   storageBucket: "coderhouse-ecommerce-51d80.appspot.com",
   messagingSenderId: "427278220796",
   appId: "1:427278220796:web:719095e25c697b2ad54679"
 };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();;

export const itemsCollection = firebase.firestore(app).collection("products")


/* const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore() */