import React, { useState } from 'react';
import axios from 'axios';


function Form () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [datapenduduk, setDataPenduduk] = useState("")

    axios.get('https://65261c4e67cfb1e59ce7e741.mockapi.io/penduduk_skilvul').then(response => {
        console.log(response.data)
    }).catch(error =>{
        console.log(error)
    })

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleForms = (event) => {
        event.preventDefault();
        alert(`Username: ${username}, Password: ${password}`);
    }

    return (
         <>
        <section className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleForms}>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" 
                        onChange={handleUsername} 
                        id="username"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default" 
                        onChange={handlePassword} 
                        id="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                </div>
            </div>
        </section>
        </>
    );
}

export default Form;
