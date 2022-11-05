import React, { useState } from "react";

const Signin = () =>{
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    return(
        <>
        <div className="bg-warning">hii im Signin</div>

        <div className="bg-primary">hii im Register</div>
        <form onSubmit={() => {}}>
            
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