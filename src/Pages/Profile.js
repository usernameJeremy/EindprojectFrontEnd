import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../Components/context/AuthContext";
import Footer from "../Components/footer/Footer";
import Boodschaplijstje from "../Components/Boodschappenlijst/Boodschaplijstje";
import './../index.css'


function Profile() {

//get request gegevens account
// get reqeust rekening (alleen als berzorgverzoek is geacepteerd)
    const { isAuth, authAxios, noAuthAxios, username } = useContext(AuthContext);




    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState(false);

        async function fetchProfileData() {

            try {
              const data = await authAxios.get(`/accounts/${username}`);

                setData(data.data);
                console.log(data)
                // console.log(rekening)
            } catch (e) {
                console.error(e);
                setError(true);
            }

        }


    useEffect( () => {
        fetchProfileData()

    }, [username] )
    return (
        <>
            <div className="outer-box">
                <div className="inner-box">
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>UserName:</strong> {username}</p>
                <p><strong>Naam:</strong> {data.name}</p>
                <p><strong>Achternaam:</strong> {data.lastName}</p>
                <p><strong>Address:</strong> {data.address}</p>
            </section>
            <Boodschaplijstje>
                <h2>Boodschappenlijst</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
                </Boodschaplijstje>
            <section>
                <h2>Rekeningen</h2>
                <p>hier zou je een rekening kunnen presenteren</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profile;