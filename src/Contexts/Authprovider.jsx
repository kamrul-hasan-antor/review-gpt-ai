import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../FireBase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const googleSignin = () => {
    setloading(true);
    return signInWithPopup(auth, googleprovider);
  };
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const AuthInfo = { user, loading, googleSignin, logOut };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
