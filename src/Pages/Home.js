import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Home.css";
import '../index.css'
import {AuthContext} from "../Components/context/AuthContext";

function Home() {
    const { isAuth } = useContext(AuthContext);









    return (
        <>
            <div className="outer-box">
                <div className="inner-box">
            <div className="home">
            <h1>Boodschap Bezorg App</h1>
            </div>
            <section className="home">
                <p className="text-home" >Welkom,</p>
                <p className="text-home">wilt u nu ook eens wat meer vrije tijd hebben? Is er bij u ook nooit een parkeerplek vrij als u boodschappen gaat doen?  </p>

                <p className="text-home">Hier is dan eindelijk de oplossing namelijk de boodschap en bezorg app 😁👌 Ontworpen in de Buurt en voor de Buurt.  </p>

                <p className="text-home">Zij die boodschappen willen ontvangen kunnen aangeven welke boodschappen ze willen! Vervolgens komt er iemand deze boodschappen leveren aan uw huis! </p>


            </section>

            <section className="home">
                {!isAuth ? <p>Je kunt ook <Link className="button" to="/signin">inloggen</Link> of jezelf <Link className="button" to="/signup">registeren</Link> als je nog geen
                    account hebt.</p>: <p></p>}
                {isAuth ? <Link className="button" to="/profile" >Profiel Pagina </Link> : <p></p>}
                {isAuth ? <p><Link className="button" to="/deliverypage">Bestelling bezorgen</Link> of <Link to="/orderpage" className="button">Bestelling plaatsen</Link> </p>: <p></p>}
            </section>
                </div>
            </div>
        </>
    );
}

export default Home;