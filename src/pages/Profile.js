import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import '../App.css'
import Buttons from "../components/buttons/Buttons";

function Profile() {

    const {isAuth, authAxios, noAuthAxios, username, jwToken} = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(false);
    const [lists, setLists] = useState([])
    const [adres, setAdres] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        async function fetchProfileData() {

            try {
                const response = await authAxios.get(`/accounts/${username}`);
                setUserData(response.data);
                console.log(response.data)
                setAdres(response.data.address)
                setImage("data:image/*;base64," + response.data.fileDocument.docFile)
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchProfileData()
    }, [username])

    useEffect(() => {
        async function groceryList() {
            try {
                const getLists = await authAxios.get(`/grocerylists`)
                setLists(getLists.data)
            } catch (e) {
                console.log(e)
            }
        }

        void groceryList();
    }, []);

    return (

        <div className="outer-box">
            <div className="inner-box">
                <div className="text-padding">
                    <h1>Profielpagina</h1>
                    <section>
                        <img className="image-box" src={image} alt="ProfielFoto"/>
                    </section>
                    <section>
                        <h2>Gegevens</h2>
                        <p><strong>UserName:</strong> {username}</p>
                        <p><strong>Naam:</strong> {userData.name}</p>
                        <p><strong>Achternaam:</strong> {userData.lastName}</p>
                        <p><strong>Address:</strong> {userData.address}</p>
                    </section>
                </div>
                <Buttons
                    className="button"
                    type="button"
                    clickHandler={() => navigate('/orderpage')}
                >Een bestelling maken </Buttons>
                <Buttons className="button"
                         type="button"
                         clickHandler={() => navigate('/deliverypage')}
                >een bestelling Bezorgen</Buttons>

            <div className="profile-text-title">
            <h1>Uw boodschappenlijstjes:</h1></div>
            <ul className="listbox-out">
                {lists.map((lijst) => {

                    return (
                        <>

                            {adres === lijst.address &&
                                <div className="listbox-in">
                                    <strong>Naam:<p>{lijst.name}</p></strong>
                                    <strong>Adres:<p>{lijst.address}</p></strong>
                                    <strong>Bezorginstructies:<p>{lijst.bezorginstructies}</p></strong>
                                    <strong>Producten: <p>{lijst.products}</p></strong>
                                    <strong>Tijdstip:<p>{lijst.dateTime}</p></strong>
                                    <strong>Status:<p>{lijst.status}</p></strong>
                                </div>
                            }
                        </>

                    )
                })}

            </ul>
            </div>
        </div>

    );
}

export default Profile;