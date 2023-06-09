import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuHB7Q6v6yjUHgKFwBeyXFwzGPy_Pn6Jo",
  authDomain: "netflix-2-e5817.firebaseapp.com",
  projectId: "netflix-2-e5817",
  storageBucket: "netflix-2-e5817.appspot.com",
  messagingSenderId: "8061914958",
  appId: "1:8061914958:web:147f0b68c4500edf65d81f",
};

initializeApp(firebaseConfig);
const storage = getStorage();
export default storage;
