import React, {useContext, useState} from 'react';
import axios from "axios";
import product from "../../Pages/Product";
import Home from "../../Pages/Home";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function Boodschaplijstje(props) {


    const { isAuth } = useContext(AuthContext);
//post request met lijst en gebruiker (enkel te bereiken via logged in state)
    const url = "http://localhost:8080"
    const [name, setName] = useState("");
    const [address , setAddress] = useState("");
    const [products , setProducts] = useState("");
    const [bezorgInstructies , setBezorgInstructies] = useState("");
    const [dateTime , setDateTime] = useState("");






    const PostList = async  (e) => {
        e.preventDefault();

        try {
            const  response  = await axios.post(`${url}/grocerylists`, {
               name: name,
             address : address,
             products: product,
            bezorginstructies: bezorgInstructies,
            dateTime: dateTime
            });




        } catch(e) {
            console.log(e)
        }


    }



    return (
        <>
            <header>
                <Link to={Home}>Homepage</Link>
            </header>
            <div className="outer-box">
        <section>
        <label htmlFor="name-field">${name}</label>
        <input
            name="name"
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </section>
            <section>
                <label htmlFor="address-field">${address}</label>
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
                    value={products}
                    onChange={(e) => setProducts(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="bezorginstructies-field">bezorginstructies</label>
                <input
                    name="bezorginstructies"
                    id="bezorginstructies-field"
                    type="text"
                    value={bezorgInstructies}
                    onChange={(e) => setBezorgInstructies(e.target.value)}
                />
            </section>
            <button type="button" onClick={PostList}>Send</button>
            </div>



        </>
    );
}

export default Boodschaplijstje;