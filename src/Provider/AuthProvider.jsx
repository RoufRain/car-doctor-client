import { Children, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //step 5
  const createUser = (email, password) => {
    //user create korar somsoy loading hobe
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //step 9 create  signin function and return signinwithemaiandpassword . tarpor autInfo te signin set
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //for signout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //step 8 onauthstatechange detect korbe user k
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);

      //user create hoy gele
      setLoading(false);
    });

    //user ber hoye gele seta return kore dibe and memory dhore rakhbe na
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
