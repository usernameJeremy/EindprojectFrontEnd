import React, {useContext, useState} from 'react';
import axios from "axios";
import Home from "../../Pages/Home";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";


function Boodschaplijstje(props) {

    const { isAuth } = useContext(AuthContext);


//post request met lijst en gebruiker (enkel te bereiken via logged in state)
    const url = "http://localhost:8080"
    const [name, setName] = useState("");
    const [address , setAddress] = useState("");
    const [products1 , setProducts] = useState("");
    const [bezorgInstructies , setBezorgInstructies] = useState("");
    const [dateTime , setDateTime] = useState("");


    const PostList = async  (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${url}/grocerylists`, {
               name: name,
             address : address,
             products: products1,
            bezorginstructies: bezorgInstructies,
            dateTime: dateTime
            });
            console.log(response)

        } catch(e) {
            console.log(e)
        }


    }



    return (
        <>
            <header>
                <Link to={Home}>Homepage</Link>
            </header>
            <div>
                <div>
        <section>
        <label htmlFor="name-field">Naam</label>
        <input
            name="name"
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </section>
            <section>
                <label htmlFor="address-field">Adres</label>
                <input
                    name="address"
                    id="address-field"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="products-field">Producten</label>
                <input
                    name="products"
                    id="products-field"
                    type="list"
                    value={products1}
                    onChange={(e) => setProducts(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="bezorginstructies-field">bezorginstructies</label>
                <textarea className="input"
                    name="bezorginstructies"
                    id="bezorginstructies-field"
                    value={bezorgInstructies}
                    onChange={(e) => setBezorgInstructies(e.target.value)}
                />
            </section>
                    <section>
                        <label htmlFor="dateTime-field">Tijdstip</label>
                        <input
                            name="dateTime"
                            id="dateTime-field"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                        />
                    </section>
            <button type="button" onClick={PostList}>Send</button>
            </div>
            </div>



        </>
    );
}

export default Boodschaplijstje;