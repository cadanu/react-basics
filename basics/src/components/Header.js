import React from 'react';


const Header = (props) => {

    let styles = {
        background: props.background,
        padding: "15px 20px",
        color: "white"
    }

    return(
        <header style={styles}>

            {props.children}

        </header>
    )
}

export default Header;
