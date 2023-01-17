import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {AuthContext} from "../Components/context/AuthContext";
import Footer from "../Components/footer/Footer";
import './../index.css'




function Profile() {

//get request gegevens account
// get reqeust rekening (alleen als berzorgverzoek is geacepteerd)
    const { isAuth, authAxios, noAuthAxios, username } = useContext(AuthContext);



    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState(false);

    useEffect( () => {
        async function fetchProfileData() {

            try {
              const data = await authAxios.get(`/accounts/${username}`);

                setData(data);
                console.log(data)

            } catch (e) {
                console.error(e);
                setError(true);
            }

        }



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
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
                    <button
                        className="button"
                        type="button"
                        onClick={() => navigate('/orderpage')}
                    >Een bestelling maken </button>


                    <button  className="button"
                             type="button"
                             onClick={() => navigate('/deliverypage')}
                    >een bestelling Bezorgen</button>

            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profile;