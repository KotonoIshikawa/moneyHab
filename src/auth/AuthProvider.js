
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase/Firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);

    

    useEffect(() => {
         
        onAuthStateChanged(auth, setCurrentUser);
    }, []);

    const Login = async(email, password, history) => {
        
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setCurrentUser(user);
            history.push("/");
            
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };

    const Signup = (email, password, history) => {
        
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setCurrentUser(user);
            history.push("/");
            
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
        
    };

    

    return(
        <AuthContext.Provider
            value = {{
                Login,
                Signup,
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export  { AuthContext, AuthProvider }