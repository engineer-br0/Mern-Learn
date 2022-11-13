import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const About = () =>{
    const navigate = useNavigate();

    const callAboutPage = async () =>{
        try{
            const res = await fetch('/about', {
                method: 'GET',
                headers:{
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            //const data = await res.json();
            console.log(res);
            console.log(res.statusText);
            if(res.status === 401){
                
            navigate('/signin');
            }

        } catch(err){
            console.log("5");
            console.log(err);
            navigate('/');
        }
    }

    useEffect(() =>{
        callAboutPage();
    }, []);

    return(
        <>
        <div className="bg-danger">hii im About</div>
        </>

    );
}

export default About;