import React from 'react';


const Button = (props) => {
    return (
        <button
            id="button"
            style={{
                background: 'black',
                color: 'white',
                fontSize: '1.3rem',
                padding: '10px 15px',
                margin: '10px',
                cursor: 'pointer'
            }}>
            {props.children}

        </button>
    )
}

export default Button;
