import {  createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[resetEmail,SetresetEmail]=useState("");
  const [loading, setLoading] = useState(true);


  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const UpdateUserProfile=(updateddata)=>{
    return updateProfile(auth.currentUser,updateddata);
  }

  const ResetUserPassword=(Email)=>{
    return sendPasswordResetEmail(auth,Email);
  }

  const SignInWithGoogle=(auth,provider)=>{
    return signInWithPopup(auth, provider)
  }

  

  const UserInfo = { user, setUser, createNewUser, Logout, Login, loading,SetresetEmail,resetEmail,UpdateUserProfile,SignInWithGoogle,ResetUserPassword };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={UserInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
