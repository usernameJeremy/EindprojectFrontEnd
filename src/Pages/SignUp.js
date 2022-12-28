import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function SignUp() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [streetname, setStreetname] = useState('');
    const [housenumber, setHousenumber] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
    Postcode: ${zipcode}, 
    straatnaam: ${streetname}
    huisnummer: ${housenumber}
    Algemene voorwaarden: ${agreeTerms}
    `);
    }
    return (
        <>
            <h1>Registreren</h1>
            <p>Wilt u ook gebruik maken van die handige Boodschappen bezorg app? Registreer uzelf nu!! </p>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="firstname-field">Voornaam</label>
                    <input
                        name="firstname"
                        id="firstname-field"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </section>

                <section>
                    <label htmlFor="lastname-field">Achternaam</label>
                    <input
                        name="lastname"
                        id="lastname-field"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="zipcode-field">Postcode</label>
                    <input
                        name="zipcode"
                        id="zipcode-field"
                        type="text"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="streetname-field">straatnaam</label>
                    <input
                        name="streetname"
                        id="streetname-field"
                        type="text"
                        value={streetname}
                        onChange={(e) => setStreetname(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="housenumber-field">huisnummer</label>
                    <input
                        name="housenumber"
                        id="housenumber-field"
                        type="number"
                        value={housenumber}
                        onChange={(e) => setHousenumber(e.target.value)}
                    />
                </section>
                <section>
                    <input
                        type="checkbox"
                        name="agree"
                        id="agree-field"
                        value={agreeTerms}
                        onChange={(e) => toggleAgreeTerms(e.target.checked)}
                    />
                    <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
                </section>
                <button type="submit">Registreren</button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;