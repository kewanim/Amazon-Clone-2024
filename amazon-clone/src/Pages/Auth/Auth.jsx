import React from 'react'
import classes from './SignUp.module.css'
import { Link } from 'react-router-dom'




function Auth() {
    return <section className={classes.login}>
                    {/* Logo */}
                <Link>
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt=""/>
                </Link>

                    {/* Form */}
                    <div className={classes.login_container}>
                        <h1>Sign In</h1>
                        <form action="">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <button className={classes.login_signInButton}>Sign In</button>
                        </form>

                        {/* Agreement */}
                        <p>
                            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interes-Based Ads Notice.
                        </p>

                        {/* Create Account Button */}
                        <button className={classes.login_registerButton}>
                            Create a new Amazon Account
                        </button>
                    </div>
            </section>
};

export default Auth