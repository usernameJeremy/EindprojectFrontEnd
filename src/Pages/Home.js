import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Components/footer/Footer";
import "../Styles/Home.css";
import axios from "axios";
import '../index.css'
import Boodschaplijstje from "../Components/Boodschappenlijst/Boodschaplijstje";

function Home() {
    const url = "http://localhost:8080"
    //Get request boodschappenlijstje (met link naar boodschappenlijst en wanneer er op knop acepteren geklikt word redirect naar login )








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

                <p className="text-home">Klik hier onder op de link van uw favoriete supermarkt</p>
            </section>

            <section className="home">
                <Link className="button" to="/profile">Profielpagina</Link>
                <Link className="button" to="/appie">Naar de Appie</Link>
                <Link className="button" to="/laidel">Naar de Laidel</Link>
                <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen
                    account hebt.</p>
            </section>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Home;