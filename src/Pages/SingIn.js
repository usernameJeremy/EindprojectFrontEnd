import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/context/AuthContext';

function SignIn() {
    const { login } = useContext(AuthContext);

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
                    <label htmlFor="firstname-field">Voornaam</label>
                    <input
                        name="firstname"
                        id="firstname-field"
                        type="text"
                    />
                </section>
                <section>
                    <label htmlFor="firstname-field">Wachtwoord</label>
                    <input
                        name="password"
                        id="password-field"
                        type="password"
                    />
                </section>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;