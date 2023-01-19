import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "./Navbar.css"
import '../../index.css'

function NavBar() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (

        <nav>
            <div className="outer-box">
                <div className="inner-box">
            {isAuth ?
                <button className="button"
                    type="button"
                    onClick={logout}
                >Log uit
                </button>
                :
                <div>
                    <button className="button"
                        type="button"
                        onClick={() => navigate('/signin')}
                    >Log in
                    </button>

                    <button className="button"
                        type="button"
                        onClick={() => navigate('/signup')}
                    >Registreren
                    </button>
                </div>
            }
                </div>
            </div>
        </nav>
    );
}

export default NavBar;