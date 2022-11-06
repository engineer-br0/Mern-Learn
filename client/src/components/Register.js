import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Register = () =>{
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        from:"",
        work:""
    })

    const postData = async(e) =>{
        e.preventDefault();
        const res = await fetch("/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await res.json();
        
        console.log(data);
        window.alert(data.message);
        if(data.message === "user successfully registered"){
            navigate("/signin");
        }
    }


    return(
        <>
        <div className="bg-primary">hii im Register</div>
        <form
        method="POST"
        onSubmit={(e) => {
            e.preventDefault();
            postData(e);
            }}>
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
             

            <button className="bg-success text-danger">Submit</button>
        </form>
        </>

    );
}

export default Register;