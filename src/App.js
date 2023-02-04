import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile";
import NavBar from "./components/navbar/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {AuthContext} from "./context/AuthContext";
import {useContext} from "react";
import Home from "./pages/Home";
import './index.css'
import DeliveryPage from "./pages/DeliveryPage";
import OrderPage from "./pages/OrderPage";
import Footer from "./components/footer/Footer";

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
