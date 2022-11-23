import React, {useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const About = () =>{
    const navigate = useNavigate();

    const [userData, setUser] = useState({});

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
            const data = await res.json();
            console.log(data);
            setUser(data);
            console.log(res);
            console.log(res.statusText);
            if(res.status === 401){
              window.alert(data.message);
            navigate('/signin');
            }

        } catch(err){
            console.log(err);
            navigate('/');
        }
    }

    useEffect(() =>{
        callAboutPage();
    }, []);

    return(
        <>
        <div className="bg-danger">hii im About
          <div> welcome {userData.name} </div>
          <div> your email is {userData.email}</div>
          <div> Bye {userData.name}</div>
          </div>
        </>

    );
}

export default About;