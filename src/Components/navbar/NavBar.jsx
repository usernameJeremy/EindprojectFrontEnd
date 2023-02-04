import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./Navbar.css"
import '../../App.css'
import Buttons from "../Buttons/Buttons";

function NavBar() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (

        <nav>
            <div className="outer-box-navbar">
                <div className="inner-box-navbar">
                    {isAuth ?    <Buttons className="button"
                                         type="button"
                                         clickHandler={() => navigate('/profile')}
                    >Profiel
                    </Buttons>  : <></>}
                    {isAuth ?  <Buttons className="button"
                                        type="button"
                                        clickHandler={() => navigate('/')}
                    >Home
                    </Buttons>: <p></p>}

                    {isAuth  ? <Buttons className="button"
                                       type="button"
                                        clickHandler={() => navigate('/orderpage')}
                    >Bestelling maken
                    </Buttons> : <p></p>}
                    {isAuth  ? <Buttons className="button"
                                       type="button"
                                        clickHandler={() => navigate('/deliverypage')}
                    >Bestelling bezorgen
                    </Buttons> : <p></p>}

            {isAuth ?
                <Buttons className="button"
                    type="button"
                         clickHandler={logout}
                >Log uit
                </Buttons>
                :
                <div>
                    <Buttons className="button"
                        type="button"
                             clickHandler={() => navigate('/signin')}
                    >Log in
                    </Buttons>

                    <Buttons className="button"
                        type="button"
                            clickHandler={() => navigate('/signup')}
                    >Registreren
                    </Buttons>
                    <Buttons className="button"
                             type="button"
                             clickHandler={() => navigate('/')}
                    >Home
                    </Buttons>
                </div>
            }
                </div>
            </div>
        </nav>
    );
}

export default NavBar;