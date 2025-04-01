import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAwIHRKEQ_K7RlLbctlHfuLADNKQIMNpcs",
    authDomain: "netflix-clone-ff54d.firebaseapp.com",
    projectId: "netflix-clone-ff54d",
    storageBucket: "netflix-clone-ff54d.firebasestorage.app",
    messagingSenderId: "500745063104",
    appId: "1:500745063104:web:3194b8d356c22662a77b25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert(error);
    }

}

const logout = () => {
    signOut(auth);
}

export {auth,db,login,signup,logout}; 