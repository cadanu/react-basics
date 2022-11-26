import React from 'react';


const Button = (props) => {

    let buttonRef = React.createRef();

    let clickMe = () => {
        console.log(buttonRef.current.clientWidth);
    }

    return (
        <button
            id="button" ref={buttonRef} onClick={clickMe}
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
