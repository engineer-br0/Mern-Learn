import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Contact = () =>{
    const navigate = useNavigate();

    const [user, setUser] = useState({});

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
            
            console.log(res);
            console.log(res.statusText);

            if(res.status != 401){
                setUser(data);
              }

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
    <form>
        <div >
           <label>name</label>
           <input 
           value={user.name}
           onChange={(e) =>{
            setUser({...user, name:e.target.value})
          }}
           placeholder="enter your name"></input>
        </div>

        <div>
           <label>email</label>
           <input 
           value={user.email}
           onChange={(e) =>{
            setUser({...user, email:e.target.value})
          }}
           placeholder="enter your email"></input>
        </div>

        <div>

           <label>phone</label>
           <input 
           value={user.phone} 
           onChange={(e) =>{
            setUser({...user, phone:e.target.value})
          }}
          placeholder="enter your phone"></input>
        </div>

        <div>
           <label>message</label>
           <input 
              value={user.message} 
              placeholder="enter your message"
              ></input>
        </div>

        <button>Submit</button>

        </form>
    </div>
    </>
)}

export default Contact;