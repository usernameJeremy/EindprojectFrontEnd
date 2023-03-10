import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import '../App.css'

function SignIn() {
    const navigate = useNavigate();
    const url = "http://localhost:8080"
    const { login, username ,setUsername } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [password, setPassword] = useState("");

       const signIn = async  (e) => {
            e.preventDefault();

            try {
                const  response  = await axios.post(`${url}/authenticate`,{
                    username: username,
                    password: password
                });
                if (response.status === 200){
                    localStorage.setItem('token', response.data.jwt);
                    login();
                    navigate("/profile")
                }
            } catch(e) {
                console.error(e);
                setError(true);
            }
        }
    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    return (
        <>
            <div className="outer-box">
                <div className="inner-box">
                    <div className="text-padding">
            <h1>Inloggen</h1>

            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="username-field">Username</label>
                    <input
                        name="username"
                        id="username-field"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="password-field">Wachtwoord</label>
                    <input
                        name="password"
                        id="password-field"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error">Combinatie van emailadres en wachtwoord is onjuist</p>}
                </section>
                <button className="button" type="submit" onClick={signIn}>Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;