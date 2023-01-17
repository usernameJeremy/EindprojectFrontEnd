import React, {useContext} from 'react';
import axios from "axios";
import {AuthContext} from "../Components/context/AuthContext";



//ophalen lijstjes  GET GROCERYLISTS
//knop om te activeren POST Delevery
function DeliveryPage(props) {

    const { isAuth, authAxios, noAuthAxios, username } = useContext(AuthContext);

    async function groceryList() {
        try {
            const getLists = await axios.get(`/grocerylists`)

            console.log(getLists.data[0])


        } catch (e) {
            console.log(e)
        }
    }



    return (
        <div>
            <section>
                <a href="/www.google.com" />
            </section>

        </div>
    );
}

export default DeliveryPage;