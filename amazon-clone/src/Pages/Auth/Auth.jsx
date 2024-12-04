// import React, { useState, useContext } from 'react'
// import classes from './SignUp.module.css'
// import { Link } from 'react-router-dom'
// import { auth } from '../../Utility/firebase';
// import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
// import {DataContext} from '../../Components/Data Provider/DataProvide'


// function Auth() {

//     const[email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const [{user}, dispatch] = useContext(DataContext)

//     const authHandler = async(e)=>{
//         e.preventDefault();
//         console.log(e.target.name);
//         if(e.target.name == "signin"){
//             // firebase auth
//             signInWithEmailAndPassword(auth, email, password)
//             .then((userInfo)=>{
//             console.log(userInfo);
//             dispatch({
//                 type:Type.SET_USER,
//                 user:userInfo.user
//             })
//         }).catch((err)=>{
//             console.log(err)
//         })
//         }else{
//             createUserWithEmailAndPassword (auth, email, password)
//             .then ((userInfo)=>{
//                 console.log(userInfo);
//                 dispatch({
//                     type:Type.SET_USER,
//                     user:userInfo.user
//             })
//             .catch((err)=>{
//                 console.log(err);
//             });
//         }
//     };
    


//     // console.log(password, email);

//     return <section className={classes.login}>
//                     {/* Logo */}
//                 <Link>
//                     <img 
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
//                     alt=""/>
//                 </Link>

//                     {/* Form */}
//                     <div className={classes.login_container}>
//                         <h1>Sign In</h1>
//                         <form action="">
//                             <div>
//                                 <label htmlFor="email">Email</label>
//                                 <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
//                             </div>
//                             <div>
//                                 <label htmlFor="password">Password</label>
//                                 <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
//                             </div>
//                             <button type="submit" 
//                             onClick={authHandler} 
//                             name="signin"
//                             className={classes.login_signInButton}>
//                                 Sign In
//                             </button>
//                         </form>

//                         {/* Agreement */}
//                         <p>
//                             By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interes-Based Ads Notice.
//                         </p>

//                         {/* Create Account Button */}
//                         <button type="submit" 
//                         onClick={authHandler} 
//                         name="signup"
//                         className={classes.login_registerButton}>
//                             Create a new Amazon Account
//                         </button>
//                     </div>
//             </section>
// };

// export default Auth

import React, { useState, useContext } from 'react';
import classes from './SignUp.module.css';
import { Link } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from '../../Components/Data Provider/DataProvide';

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [{ user }, dispatch] = useContext(DataContext); // Ensure `user` is imported correctly

console.log(user)

    const authHandler = async (e) => {
        e.preventDefault();
        console.log(e.target.name);

        if (e.target.name === "signin") { // FIX: Use strict equality operator (===)
            // Firebase auth
            signInWithEmailAndPassword(auth, email, password)
                .then((userInfo) => {
                    dispatch({
                        type: "SET_USER", // Ensure "SET_USER" matches your action type definition
                        user: userInfo.user,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    setError("Failed to sign in. Please try again.");
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userInfo) => {
                    dispatch({
                        type: "SET_USER", // Ensure "SET_USER" matches your action type definition
                        user: userInfo.user,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    setError("Failed to create an account. Please try again.");
                });
        }
    };

    return (
        <section className={classes.login}>
            {/* Logo */}
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>

            {/* Form */}
            <div className={classes.login_container}>
                <h1>Sign In</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if exists */}
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={authHandler}
                        name="signin"
                        className={classes.login_signInButton}
                    >
                        Sign In
                    </button>
                </form>

                {/* Agreement */}
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                {/* Create Account Button */}
                <button
                    type="submit"
                    onClick={authHandler}
                    name="signup"
                    className={classes.login_registerButton}
                >
                    Create a new Amazon Account
                </button>
            </div>
        </section>
    );
}

export default Auth;