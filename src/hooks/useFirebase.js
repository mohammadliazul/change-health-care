import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, updateProfile, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user && user.emailVerified) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, [auth]);


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch(error => {
                setError(error.code);
            })
    }


    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                // Password reset email sent!
                // ..
                setError("Please check your email for password reset.");
            })
            .catch((error) => {
                setError('Missing your email. Please enter the email then try again.');
            });

    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError("Incorrect email address or password.");
            })
    }




    const handleNameChange = e => {
        setName(e.target.value);
    }


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRePasswordChange = e => {
        setRePassword(e.target.value);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const handleSignUp = e => {
        e.preventDefault();
        console.log(name, email, password, rePassword);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (!(password === rePassword)) {
            setError('Password does not match.');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password, rePassword, name)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('Check your email inbox. We sent an email to complete your Sign Up.');
                verifyEmail();
                setUserName();

            })
            .catch(error => {
                setError('A user already exists with this email address.');
            })
    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    return {
        user,
        error,
        isLoading,
        setIsLoading,
        setUser,
        setError,
        signInUsingGoogle,
        logOut,
        handleLogin,
        handleSignUp,
        handleEmailChange,
        handlePasswordChange,
        handleForgetPassword,
        handleRePasswordChange,
        handleNameChange
    }
}

export default useFirebase;