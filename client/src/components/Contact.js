import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Contact = () =>{
    const navigate = useNavigate();

    const [user, setUser] = useState();

    const pullDataFromMongo = async () =>{
        try{
            const res = await fetch('/pullDataFromMongo', {
                method: 'GET',
                headers:{
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            const data = await res.json();
            console.log(data);
            setUser(data);
            console.log(res);
            console.log(res.statusText);

        } catch(err){
            console.log(err);
            navigate('/');
        }
    }

    useEffect(() =>{
        pullDataFromMongo();
    }, []);

    return(
    <>
    <div>
        hii i am contact page
    </div>
    <div>

    </div>
    </>
)}

export default Contact;