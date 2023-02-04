import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "./Pages/Profile";
import NavBar from "./Components/navbar/NavBar";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import {AuthContext} from "./context/AuthContext";
import {useContext} from "react";
import Home from "./Pages/Home";
import './index.css'
import DeliveryPage from "./Pages/DeliveryPage";
import OrderPage from "./Pages/OrderPage";
import Footer from "./Components/footer/Footer";

function App() {
    const { isAuth } = useContext(AuthContext);

  return (
    <>

      <NavBar/>
          <Routes>
               <Route path="/" element={<Home/>} />

               <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/signin"/>}/>
               <Route path="/deliverypage" element={isAuth ? <DeliveryPage/> : <Navigate to="/signin"/> }/>
               <Route path="/orderpage" element={isAuth ?<OrderPage/> : <Navigate to="/signin"/>}/>
               <Route path="/signin" element={<SignIn/>} />
               <Route exact path="/signup" element={<SignUp/>} />
          </Routes>
        <Footer/>

    </>
  );
}

export default App;
