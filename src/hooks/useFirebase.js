import { useEffect, useState } from "react";
import initFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


initFirebase();

const useFirebase = () => {

const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState('');
const [admin, setAdmin] = useState(false);
const [token, setToken] = useState('');

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const regUser = (email, password, name, navigate) => {
  setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setError('');
        const newUser = {email, displayName: name};
        setUser(newUser)
        // save user to the database
        saveUser(email, name, 'POST')
        // send name to firebase after creation

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          
        }).catch((error) => {
          
        });
        navigate('/')
        
      })
      .catch((error) => {
        
        setError(error.message);
        console.log(error);
        
      })
      .finally(()=> setIsLoading(false));
}

const loginUser = (email, password, location, navigate) => {
  setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/'
      navigate(destination);
      setError('');
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(()=> setIsLoading(false));
}

const googleSignin = (location, navigate) => {
  setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      saveUser(user.email, user.displayName, 'PUT');
      setError('');
    }).catch((error) => {
      setError(error.message);
    })
    .finally(()=> setIsLoading(false));;
}


// Observer User State
useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          getIdToken(user)
          .then(idToken => {
            setToken(idToken);
          })
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
},[])

useEffect(() => {
  fetch(`https://thawing-retreat-53148.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
}, [user.email])


const logout = () =>{
  setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=> setIsLoading(false));
}

const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  fetch('https://thawing-retreat-53148.herokuapp.com/users', {
      method: method,
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then()
}

return{
    user, 
    admin,
    token,
    isLoading,
    error,
    regUser,
    logout,
    loginUser,
    googleSignin,
}
}

export default useFirebase;