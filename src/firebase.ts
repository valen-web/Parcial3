import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyB0MmVTF_SxuyQaZKmbwIoYDgzLwoh847Q",
    authDomain: "parcial-final-651a6.firebaseapp.com",
    projectId: "parcial-final-651a6",
    storageBucket: "parcial-final-651a6.appspot.com",
    messagingSenderId: "1066464447148",
    appId: "1:1066464447148:web:a485faa12808a058bead09"
  };
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export const answers = async (name : any, color: any, letter: any) => {
    const addAnswers = await addDoc(collection(db, "respuestas"), {
        name: "",
        color: "",
        letter: ""
      });
      console.log("Document written with ID: ", addAnswers.id);
  }



  






