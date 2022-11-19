import React, {useState, useEffect} from "react";

const Home = () =>{
    const [name, setName] = useState("");

    const getData = async() =>{
        const url = '/pullDataFromMongo';
        const res = await fetch(url, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();
        setName (data.name);
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