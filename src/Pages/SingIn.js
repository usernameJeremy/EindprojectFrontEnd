import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/context/AuthContext';
import axios from "axios";






function SignIn() {

    const url = "http://localhost:8080"
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

       const signIn = async  (e) => {
            e.preventDefault();

            try {
                const  response  = await axios.post(`${url}/authenticate`,{
                    username: username,
                    password: password
                });
                if (response.status === 200){
                    console.log(response)
                    localStorage.setItem('token', response.data.jwt);
                    login();
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
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

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
                <button type="submit" onClick={signIn}>Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;