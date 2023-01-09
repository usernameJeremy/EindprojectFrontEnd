import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "../../Styles/Navbar.css"
import '../../index.css'

function NavBar() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (

        <nav>
            <Link className="button" to="/">
          <span className="logo-container">

            <h3>
              Boodschap bezorg app
            </h3>
          </span>
            </Link>

            <div className="navButton">
            {isAuth ?
                <button className="button"
                    type="button"
                    onClick={logout}
                >
                    Log uit
                </button>
                :
                <div>
                    <button className="button"
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button className="button"
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>
                </div>
            }
            </div>
        </nav>

    );
}

export default NavBar;