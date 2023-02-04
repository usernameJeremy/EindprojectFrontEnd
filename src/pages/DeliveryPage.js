import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import { useNavigate} from "react-router-dom";
import '../Styles/DeliveryPage.css'
import Buttons from "../components/buttons/Buttons";
import '../App.css'


function DeliveryPage() {

    const { isAuth, authAxios, noAuthAxios, username } = useContext(AuthContext);
    const navigate = useNavigate();
    const [lists , setLists] = useState([])
    const [clicks, setClicks]= useState(0);

    const refreshPage = () =>{
        setClicks(clicks +1 );
        window.location.reload();
    }



    useEffect(()=> {
    async function groceryList() {
        try {
            const getLists = await authAxios.get(`/grocerylists`)
            setLists(getLists.data)
            console.log(getLists)

        } catch (e) {
            console.log(e)
        }
    }   void groceryList();
    },[]);

    async function accepList(address){
        try{
            await authAxios.put(`/deliveryrequests/${address}/accounts/${username}`)
            refreshPage()
        }catch (e){
            console.log(e)
        }
    }

    return (
        <div className="outer-box">
            <div className="inner-box">
                <div className="text-padding">
                <h1 className="title">Boodschappenlijstjes: </h1>
                <article className="article-delivery">
                    { Object.keys(lists).length > 0  &&
                        <ul className="listbox-out">
                            {lists.map((lijst)=> {
                                return(
                                    <>
                                         {lijst.status === "AVAILABLE"  &&
                                        <div className="listbox-in">
                                            <strong>Naam:<p>{lijst.name}</p></strong>
                                            <strong>Adres:<p>{lijst.address}</p></strong>
                                            <strong>Bezorginstructies:<p>{lijst.deliveryInstructions}</p></strong>
                                            <strong>Producten: <p>{lijst.products}</p></strong>
                                            <strong>Tijdstip:<p>{lijst.dateTime}</p></strong>
                                            <strong>Status:<p>{lijst.status}</p></strong>
                                            <Buttons className="button" type="button" clickHandler={() => accepList(lijst.address)}>Ik ga bezorgen!</Buttons>
                                        </div>
                                    }
                                    </>
                                )})}
                        </ul>
                    }
                </article>
                </div>
            </div>
        </div>

    );
}

export default DeliveryPage;