
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "./Pages/Profile";
import NavBar from "./Components/navbar/NavBar";
import SignIn from "./Pages/SingIn";
import SignUp from "./Pages/SignUp";
import {AuthContext} from "./Components/context/AuthContext";
import {useContext} from "react";
import Home from "./Pages/Home";
import Appie from "./Pages/Winkelpagina/Appie";
import Laidel from "./Pages/Winkelpagina/Laidel";

function App() {
    const { isAuth } = useContext(AuthContext);

  return (
    <>

      <NavBar />
          <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/"/>}/>
               <Route path="/appie" element={<Appie/>}/>
               <Route path="/signin" element={<SignIn/>} />
               <Route exact path="/signup" element={<SignUp/>} />
              <Route path="/laidel" element={<Laidel/>}/>
          </Routes>




    </>
  );
}

export default App;
