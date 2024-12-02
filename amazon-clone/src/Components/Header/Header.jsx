import React from 'react';
import LowerHeader from "./LowerHeader";
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <>
            <section>
                <div className={classes.header__container}>
                    {/* logo section */}
                    <div className={classes.logo__container}>
                        <Link to="/">
                            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                        </Link>
                        {/* delivery */}
                        <div className={classes.delivery}>
                            <span>
                                <SlLocationPin />
                            </span>
                            <div>
                                <p>Delivered to</p>
                                <span>Ethiopia</span>
                            </div>
                        </div>
                    </div>                   
                    {/* search */}
                    <div className={classes.search}>
                        <select name="" id="">
                            <option value="">All</option>
                        </select>
                        <input type="text" />
                        <CiSearch size={25}/>
                    </div>
                    {/* right side */}
                    <div className={classes.order__container}>
                        <Link to="" className={classes.language}>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="US Flag"/>

                            <select name='' id=''>
                                <option value="">EN</option>
                            </select>
                        </Link>
                        <Link to="/auth">
                                <p>Sign In</p>
                                <span>Account & Lists</span>
                        </Link>
                        <Link to="/orders">
                            <p>returns</p>
                            <span>& Orders</span>
                        </Link>
                        <Link to="/cart" className={classes.cart}>
                            <BiCart size={35} />
                            <span>0</span>
                        </Link>
                    </div>
                </div>
            </section>
    <LowerHeader/>
</>
    );
};

export default Header;