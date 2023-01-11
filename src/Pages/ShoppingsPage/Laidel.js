import React from 'react';
import Product from "../../Components/Product/Product";
import laidel from "../../asset/Laidel.png"
import picanha from "../../asset/picanha.jpeg"
import walnoten from "../../asset/walnoten.jpeg"
import Zalm from "../../asset/Zalm.jpeg"
import "../../Styles/shoppingpage.css"
import Footer from "../../Components/footer/Footer";

function Laidel() {
    return (
        <>
           <div className="winkelpage">
               <div>
            <section>
                <img className="shoppingpageimg" src={laidel}/>
            </section>
            <section className="products">
                <Product
                    name={"picanha"}
                    img={picanha}
                    weight={"1800 gram"}
                    price={35.99}
                />
                <Product
                    name={"walnoten"}
                    img={walnoten}
                    weight={"100 gram"}
                    price={5.99}
                />
                <Product
                    name={"Zalm"}
                    img={Zalm}
                    weight={"600 gram"}
                    price={12.99}
                />
            </section>
           </div>
           </div>
            <Footer/>
        </>
    );
}

export default Laidel;