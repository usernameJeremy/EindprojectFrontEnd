import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Voornaam:</strong> hardcoded-voornaam</p>
                <p><strong>Achternaam:</strong> hardcoded-Achternaam</p>
                <p><strong>Postcode:</strong> hardcoded-Postcode</p>
                <p><strong>straatnaam:</strong> hardcoded-straatnaam</p>
                <p><strong>huisnummer:</strong> hardcoded-huisnummer</p>
                {/*<button type="radiobutton" ></button>*/}
                {/*<button type="radiobutton" ></button>*/}
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;