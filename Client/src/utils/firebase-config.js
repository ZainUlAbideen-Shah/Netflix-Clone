import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyAfXyoa_oDS6SnIylUsXhfzWd0FTHVY5wM",
        authDomain: "netflix-clone---mern.firebaseapp.com",
        projectId: "netflix-clone---mern",
        storageBucket: "netflix-clone---mern.appspot.com",
        messagingSenderId: "604666050543",
        appId: "1:604666050543:web:e9659e8c3394475474a81a",
        measurementId: "G-90PYSJNXSJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);