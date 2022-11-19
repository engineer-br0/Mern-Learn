import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () =>{
    const navigate = useNavigate();

    const logout = async() =>{
        const url = '/logout';
        try{
        const res = await fetch(url, {
            method : 'GET',
            headers :{
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();
        console.log(res);
        window.alert(data.mess);
        if(res.status === 200){
            navigate('/');
        }
    }
    catch(err){
        console.log(err);
    }

    }
    return(
        <>
        <div className="bg-info">
            hello from logout
        </div>
        <button onClick={() => logout()} className="bg-red" > Logout</button>
        </>
    );
}

export default Logout;