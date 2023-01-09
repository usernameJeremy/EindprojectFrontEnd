import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../Components/context/AuthContext";


function Profile() {

//get request gegevens account
// get reqeust rekening (alleen als berzorgverzoek is geacepteerd)
    const { isAuth } = useContext(AuthContext);

    const url = "http://localhost:8080"
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [details, setdetails] = useState("");



    const [accountData, setAccountData] = useState([]);
    const [error, setError] = useState(false);

        async function fetchProfileData() {

            try {
                const data = await axios.get(`${url}/accounts${username}`);
                const rekening = await axios.get(`${url}/bills`);
                setAccountData(accountData);
                console.log(data)
                console.log(rekening)
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }



    return (
        <>
            <div className="outer-box">
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>UserName:</strong> username</p>
                <p><strong>Naam:</strong> name</p>
                <p><strong>Achternaam:</strong> lastname</p>
                <p><strong>Address:</strong> address</p>
            </section>
            <section>
                <h2>Boodschappenlijst</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
                </section>
            <section>
                <h2>Rekeningen</h2>
                <p>hier zou je een rekening kunnen presenteren</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </div>
        </>
    );
}

export default Profile;