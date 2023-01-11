import React, {useState} from 'react';
import "../../Styles/Product.css"


function Product({name , weight, price, img, title }) {



    return (
        <>

            <section>
                <article className="products">
                    <h2>{name}</h2>
                     <img src={img} alt={title}/>
                    <p> {weight}</p>
                     <strong> €{price} </strong>
                </article>
            </section>

        </>
    );
}

export default Product;