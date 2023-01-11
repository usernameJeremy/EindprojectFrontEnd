import React from 'react';
import Product from "../../Components/Product/Product";
import Broccoli from "../../asset/Broccoli.jpeg";
import Komkommer from "../../asset/Komkommer.jpeg";
import melk from "../../asset/melk.jpeg";
import appie from "../../asset/Appie.jpeg"
import NavBar from "../../Components/navbar/NavBar";
import "../../Styles/shoppingpage.css"
import Footer from "../../Components/footer/Footer";

function Appie() {

    return (
        <>
            <div className="winkelpage">
                <div>
            <section>
                <img className="shoppingpageimg" src={appie}/>
            </section>
            <section className="products">
                <Product
                    name={"Broccoli"}
                    img={Broccoli}
                    weight={"500 gram"}
                    price={2.99}
                />
                <Product
                    name={"komkommer"}
                    img={Komkommer}
                    weight={"300 gram"}
                    price={1.49}
                />
                <Product
                    name={"melk"}
                    img={melk}
                    weight={"2 Liter"}
                    price={1.65}
                />
            </section>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Appie;