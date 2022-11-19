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
               <Link to="/signup">Register</Link>
               <Link to="/signin">Sign in</Link>
               <Link to='/contact' > Contact us</Link>
               <Link to='/logout' >Logout</Link>
            </div>
        </div>
        
        </>
    );
}

export default Nav;