import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () =>{

    return(
        <>
        <div className="container">
            <div>
               <div>Mridul</div>
            </div>

            <div className="container">
               <a href='/' className="">Home</a>
               <Link to='/about'>About me</Link>
               <Link to="/register">Register</Link>
               <Link to="/signin">sign in</Link>
            </div>
        </div>
        
        </>
    );
}

export default Nav;