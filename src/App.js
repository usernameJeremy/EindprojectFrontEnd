
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "./Pages/Profile";
import NavBar from "./Components/navbar/NavBar";
import SignIn from "./Pages/SingIn";
import SignUp from "./Pages/SignUp";
import {AuthContext} from "./Components/context/AuthContext";
import {useContext, useEffect, useState} from "react";
import Home from "./Pages/Home";
import Appie from "./Pages/ShoppingsPage/Appie";
import Laidel from "./Pages/ShoppingsPage/Laidel";
import './index.css'
import axios from "axios";
import DeliveryPage from "./Pages/DeliveryPage";
import OrderPage from "./Pages/OrderPage";


// const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3MzYwMjc5NSwiaWF0IjoxNjcyNzM4Nzk1fQ.u_OC7W21W80HFhZyaMAonRMw1D20ENtOFB-zae_WXwo';
// const url = "http://localhost:8080"
//
// const authAxios = axios.create({
//     bareUrl: url,
//     headers: {
//         Authorization: `Bearer ${bearerToken}`,
//     },
// });

function App() {
    const { isAuth } = useContext(AuthContext);






  return (
    <>

      <NavBar />
          <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/"/>}/>
              <Route path="/bezorgen" element={<DeliveryPage/> }/>
              <Route path="/orderpage" element={<OrderPage/> }/>
               <Route path="/signin" element={<SignIn/>} />
               <Route exact path="/signup" element={<SignUp/>} />

          </Routes>




    </>
  );
}

export default App;
