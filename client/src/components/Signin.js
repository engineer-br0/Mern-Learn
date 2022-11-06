import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    // useEffect(() =>{
    //     console.log(user);
    // },[user]);

    const loginUser = async (e) =>{
        const res =  await fetch("/signin", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        
       const data = await res.json();
        console.log(res);
        console.log(data);
        window.alert(data.message);
        if(data.message === "login successfully"){
            navigate('/');
        }
            
    }
    

    return(
        <>
        <div className="bg-warning">hii im Signin</div>
        <form
        method="POST"
        onSubmit={(e) => {
            e.preventDefault();
            loginUser(e);
            }}>
            
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
           

            <button className="bg-success text-danger">Submit</button>
        </form>
        </>

    );
}

export default Signin;