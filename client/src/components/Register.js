import React from "react";
import { useState, useEffect } from "react";

const Register = () =>{

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        from:"",
        work:"",
        classa:""
    })

    const postData = async(e) =>{
        e.preventDefault();

        const {name, email, password, from, work, classa} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        const data = await res.json(
            {name, email, password, from, work, classa}
        );

        console.log(data);
    }


    return(
        <>
        <div className="bg-primary">hii im Register</div>
        <form
        method="POST"
        onSubmit={(e) => {
            e.preventDefault();
            console.log(user);
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
             <div>
            <label>
                class
            </label>
            <input
             value= {user.classa}
             onChange = {(e) => {
                setUser({...user, classa: e.target.value});
             }}
             placeholder="enter your classa"
            />
            </div>

            <button className="bg-success text-danger">Submit</button>
        </form>
        </>

    );
}

export default Register;