import React, {useState} from 'react';
import axios from "axios";
import product from "../../Pages/Product";

function Boodschaplijstje(props) {

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
            bezorginstructies: bezorginstructies,
            dateTime: dateTime
            });




        } catch(e) {
            console.log(e)
        }


    }



    return (
        <>
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




        </>
    );
}

export default Boodschaplijstje;