import React, {useState, useEffect} from "react";

const Home = () =>{
    const [name, setName] = useState("");

    const getData = async() =>{
        const url = '/pullDataFromMongo';
        try{
        const res = await fetch(url, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        });
        if(res.status === 401) console.log("user not found");
        else{
        const data = await res.json();
        setName (data.name);
        }

    }catch(err){
        console.log(err);
        window.alert(err);
    }
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
        <div className="bg-info">
        <div >hii im home</div>
        <div>welcome</div>
        {(name) ? <h1>{name}</h1> : ""}
        <div>{(name) ? 'happy to see you back' : "we are developers"}</div>
        </div>
        </>

    );
}

export default Home;