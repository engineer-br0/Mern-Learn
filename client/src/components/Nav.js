import React from "react";
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
               <a href='about'>About me</a>
               <a href="register">Register</a>
               <a href="signin">sign in</a>
            </div>
        </div>
        
        </>
    );
}

export default Nav;