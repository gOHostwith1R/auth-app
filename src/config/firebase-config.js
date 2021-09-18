import firebase from "firebase/compat";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCd_X-kw_8lyhbgU5Yx7vGZlnWLX3_4Ycs",
    authDomain: "auth-app-b6c45.firebaseapp.com",
    projectId: "auth-app-b6c45",
    storageBucket: "auth-app-b6c45.appspot.com",
    messagingSenderId: "738051355800",
    appId: "1:738051355800:web:777f6160073ddc239f4ced",
    measurementId: "G-2YHDG2MLC9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;