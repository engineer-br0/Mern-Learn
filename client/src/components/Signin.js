import React, { useState, useEffect } from "react";

const Signin = () =>{
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    // useEffect(() =>{
    //     console.log(user);
    // },[user]);
    

    return(
        <>
        <div className="bg-warning">hii im Signin</div>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(user);
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