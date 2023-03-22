import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXF3CeI0earzDzfw6w8ov8WcaakWTFDyA',
  authDomain: 'noname-proj-df693.firebaseapp.com',
  projectId: 'noname-proj-df693',
  storageBucket: 'noname-proj-df693.appspot.com',
  messagingSenderId: '889269622006',
  appId: '1:889269622006:web:035d07dad10600b2ea88d7',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
