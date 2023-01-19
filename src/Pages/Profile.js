import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {AuthContext} from "../Components/context/AuthContext";
import Footer from "../Components/footer/Footer";
import './../index.css'




function Profile() {



    const { isAuth, authAxios, noAuthAxios, username } = useContext(AuthContext);
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState(false);
    const [lists , setLists] = useState([])

    useEffect( () => {
        async function fetchProfileData() {

            try {
              const data = await authAxios.get(`/accounts/${username}`);
                setData(data);

            } catch (e) {
                console.error(e);
                setError(true);
            }

        }
        fetchProfileData()

    }, [username] )





    useEffect(()=> {
        async function groceryList() {
            try {
                const getLists = await authAxios.get(`/grocerylists`)
                setLists(getLists.data)
                console.log(getLists.data)
            } catch (e) {
                console.log(e)
            }
        }   void groceryList();
    },[]);





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
                <ul className="listbox-out">
                    {lists.map((lijst)=>{
                        return(
                            <div className="listbox-in">
                                <strong>Naam:<p>{lijst.name}</p></strong>
                                <strong>Adres:<p>{lijst.address}</p></strong>
                                <strong>Bezorginstructies:<p>{lijst.bezorginstructies}</p></strong>
                                <strong>Producten: <p>{lijst.products}</p></strong>
                                <strong>Tijdstip:<p>{lijst.dateTime}</p></strong>
                                <strong>Status:<p>{lijst.status}</p></strong>
                            </div>
                        )})}
                </ul>
            </div>
        </>
    );
}

export default Profile;