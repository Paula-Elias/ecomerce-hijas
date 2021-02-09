import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCQRfviKKE_pNzzWkBsTiXbHE1afNGGcsQ",
    authDomain: "proyecto-react-coder.firebaseapp.com",
    projectId: "proyecto-react-coder",
    storageBucket: "proyecto-react-coder.appspot.com",
    messagingSenderId: "762183160074",
    appId: "1:762183160074:web:bc0551ae8c688cfd92aaf3"
  };


  //esta funcion me da una instancia d ela app ya inicializada
  const app = firebase.initializeApp(config);


  //esta funcion me da una instancia de firestore
  export function getFirestore() { 
      return firebase.firestore(app) 
    }  

    export function getFirebase(){
        return app;
    }