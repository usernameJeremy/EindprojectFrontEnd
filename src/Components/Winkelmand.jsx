// import React, {useState} from 'react';
//
// function Winkelmand(props) {
//     const [cart, setCart] = useState([]);
//
//     function addItemToCard(productName, productPackage, productPrice) {
//         // first find out if the product is already in the cart:
//         // if it is, indexOfProduct will be 0 or higher. if not, it will be -1
//         const indexOfProduct = cart.findIndex((product) => {
//             return product.productName === productName;
//         });
//
//         if (indexOfProduct >= 0) {
//             // if yes, find out if also the product is already in the card:
//             // if it is, indexOfPackage will be 0 or higher. if not, it will be -1
//             const indexOfPackage = cart[indexOfProduct].packages.findIndex((packageThing) => {
//                 return packageThing.packageName === productPackage;
//             });
//
//             if (indexOfPackage >= 0) {
//                 // first we have to copy the cart array so we can edit it
//                 const newCart = [...cart];
//                 // then we check how many packages of this kind we already have
//                 const currentAmountofPackages = newCart[indexOfProduct].packages[indexOfPackage].amount;
//                 // we update the newCart with the old amount + 1;
//                 newCart[indexOfProduct].packages[indexOfPackage].amount = currentAmountofPackages + 1;
//                 // we use the newCart array to set the cart-state
//                 setCart(newCart);
//             } else {
//                 // if no: add the package to this product!
//                 // first we have to copy the cart array so we can edit it
//                 const newCart = [...cart];
//                 // we add the package to the product:
//                 newCart[indexOfProduct].packages.push({
//                     packageName: productPackage,
//                     amount: 1,
//                     price: productPrice,
//                 });
//
//                 // we use the newCart array to set the cart-state
//                 setCart(newCart);
//             }
//
//         } else {
//             // if no: add the product
//             setCart([
//                 ...cart,
//                 {
//                     productName: productName,
//                     packages: [
//                         {
//                             packageName: productPackage,
//                             amount: 1,
//                             price: productPrice,
//                         },
//                     ]
//                 },
//             ])
//         }
//     }
//
//     console.log('CART IS NU:', cart);
//
//     return (
//         <>
//
//
//
//
//
//         </>
//     );
// }
//
// export default Winkelmand;