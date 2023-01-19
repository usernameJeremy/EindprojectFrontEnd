import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../Components/context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import '../Styles/DeliveryPage.css'
import '../index.css'





//knop om te activeren POST Delivery
function DeliveryPage() {

    const { isAuth, authAxios, noAuthAxios, username } = useContext(AuthContext);
    const navigate = useNavigate();
    const [lists , setLists] = useState([])


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


    async function accepList(address){
        try{
            await authAxios.put(`/deliveryrequests/${address}/accounts/${username}`)
        }catch (e){
            console.log(e)
        }
    }



    return (
        <div className="outer-box">
            <div className="inner-box">
                <article>
                    { Object.keys(lists).length > 0  &&
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
                                            <button className="button" type="button" onClick={() => accepList(lijst.address)} >Ik ga bezorgen!</button>
                                        </div>
                                )})}
                        </ul>
                    }
                </article>
                </div>

        </div>

    );
}

export default DeliveryPage;