import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import "../App.css"

function OrderPage() {
    const { isAuth, authAxios, noAuthAxios, username } = useContext(AuthContext);

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address , setAddress] = useState("");
    const [products , setProducts] = useState("");
    const [bezorgInstructies , setBezorgInstructies] = useState("");
    const [dateTime , setDateTime] = useState("");
    const [userName, setUserName] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [error, setError] = useState(false);

    const PostList = async  (e) => {
        e.preventDefault();
        try {
            const response = await authAxios.post(`/grocerylists`, {
                name: userName,
                address : userAddress,
                products: products,
                bezorginstructies: bezorgInstructies,
                dateTime: dateTime
            });
            console.log(response)
            if (response.status === 201){
                navigate("/profile")
            }
        } catch(e) {
            console.log(e)
        }
    }

    useEffect( () => {
        async function fetchProfileData() {

            try {
                const response = await authAxios.get(`/accounts/${username}`);
                setUserName(response.data.name);
                setUserAddress(response.data.address)

            } catch (e) {
                console.error(e);
                setError(true);
            }

        }
        fetchProfileData()

    }, [username] )


    return (
        <div className="outer-box">
            <div className="inner-box">
                <div className="text-padding">
                <section>
                    <label htmlFor="name">Naam:</label>
                    <strong>{userName}</strong>
                </section>
                <label htmlFor="name">Adres:</label>
                <strong>{userAddress}</strong>
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
                <section>
                    <label htmlFor="dateTime-field">Tijdstip</label>
                    <input
                        name="dateTime"
                        id="dateTime-field"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                    />
                </section>

            </div>

                <button id="button-box" className="button" type="button" onClick={PostList}>Verstuur</button>

            </div>
        </div>
    );
}

export default OrderPage;