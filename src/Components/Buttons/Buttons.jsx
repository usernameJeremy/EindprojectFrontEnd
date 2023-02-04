import React from 'react';
import "./Buttons.css"

function Buttons({text, children , type = "button", clickHandler, className}) {
    return (
        <button
            className={className}
            id={text}
            type={type}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}

export default Buttons;