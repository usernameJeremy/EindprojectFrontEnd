import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import "../Styles/Singup.css"
import Footer from "../Components/footer/Footer";
import '../index.css'

function SignUp() {
    const navigate = useNavigate()



    const url = "http://localhost:8080"
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [enabled] = useState(true);
    const [apikey] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [address, setAddress] = useState('');

        async function Registreer() {

            try {
                const response = await axios.post(`${url}/users`, {
                    username: username,
                    password: password,
                    enabled: enabled,
                    apikey: apikey,
                    email: email
                });
                console.log(response)
                if(response.status === 201){
                    await axios.put(`${url}/accounts/${username}`, {
                        name: name,
                        lastName: lastName,
                        address: address
                    });

                    navigate("/signin")
                }

            } catch(e) {
                console.error(e);
            }
        }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    username: ${username},
    email: ${email},
    enabled: ${enabled},
    apikey: ${apikey}
     name: ${name},
    lastName: ${lastName}
    address: ${address}
    `);
    }


    return (
        <>

            <div className="outer-box">
                <div className="inner-box">
            <h1 className="register">Registreren</h1>
            <p className="register">Wilt u ook gebruik maken van die handige Boodschappen bezorg app? Registreer uzelf nu!! </p>
            <form className="register" onSubmit={handleSubmit}>
                <section className="register">
                    <label htmlFor="firstname-field">username</label>
                    <input
                        name="username"
                        id="username-field"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </section>

                <section className="register">
                    <label htmlFor="lastname-field">password</label>
                    <input
                        name="password"
                        id="password-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="email-field">E-mail</label>
                    <input
                        name="email"
                        id="email-field"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="name-field">name</label>
                    <input
                        name="name"
                        id="name-field"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="lastname-field">lastname</label>
                    <input
                        name="lastname"
                        id="lastname-field"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="address-field">address</label>
                    <input
                        name="address"
                        id="address-field"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </section>

                <button className="button" type="submit" onClick={Registreer}>Registreren</button>
            </form>
            <p className="register">Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>

                </div>
            </div>
        </>
    );
}

export default SignUp;