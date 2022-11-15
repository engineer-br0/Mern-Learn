import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Contact = () =>{
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const sendToMongo = async(e) =>{
e.preventDefault();
        const url = '/pullDataFromMongo';
        const res =  await fetch(url, {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        });

        const data = res.json();
        console.log(data);
        console.log(res);

        if(res.status === 201){
            window.alert("message sent!");
        }
        else{
            window.alert(data);
        }
    }

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

            if(res.status !== 401){
                setUser({...user, name:data.name, email: data.email});
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
    <form method="POST" onSubmit={(e) => sendToMongo(e)}>
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
              onChange={(e) =>{
                setUser({...user, message:e.target.value});
              }}
              placeholder="enter your message"
              ></input>
        </div>

        <button>Submit</button>

        </form>
    </div>
    </>
)}

export default Contact;