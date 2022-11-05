import React from "react";
import { useState, useEffect } from "react";

const Register = () =>{

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        from:"",
        work:"",
        class:""
    })


    return(
        <>
        <div className="bg-primary">hii im Register</div>
        <form onSubmit={() => {console.log(user)}}>
            <div>
            <label>
                name
            </label>
            <input
             value= {user.name}
             onChange = {(e) => {
                setUser({...user, name: e.target.value});
             }}
             placeholder="enter your name"
            />
            </div>
            <div>
            <label>
                email
            </label>
            <input
             value= {user.email}
             onChange = {(e) => {
                setUser({...user, email: e.target.value});
             }}
             placeholder="enter your email"
            />
            </div>
            <div>
            <label>
                password
            </label>
            <input
             value= {user.password}
             onChange = {(e) => {
                setUser({...user, password: e.target.value});
             }}
             placeholder="enter your password"
            />
</div>
            <div>
            <label>
                from
            </label>
            <input
             value= {user.from}
             onChange = {(e) => {
                setUser({...user, from: e.target.value});
             }}
             placeholder="enter your from"
            />
            </div>
            <div>
            <label>
                work
            </label>
            <input
             value= {user.work}
             onChange = {(e) => {
                setUser({...user, work: e.target.value});
             }}
             placeholder="enter your work"
            />
             </div>
             <div>
            <label>
                class
            </label>
            <input
             value= {user.class}
             onChange = {(e) => {
                setUser({...user, class: e.target.value});
             }}
             placeholder="enter your class"
            />
            </div>

            <button className="bg-success text-danger">Submit</button>
        </form>
        </>

    );
}

export default Register;