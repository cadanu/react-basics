import { logDOM } from '@testing-library/react';
import React from 'react';

let styles={
    position: 'relative',
    maxWidth: '350px',
    width: '100%',
    height: '60px'
    // border: '1px solid red'
}
let styleName={
    position: 'absolute',
    top: '0',
    fontSize: '1.2rem',
    textShadow: '1px 1px 12px #c7293b'
}
let styleBrand={
    position: 'absolute',
    top: '24px',
    left: '0',
    fontSize: '4.5rem',
}
let styleBrandCapital={
    fontSize: 'larger',
    fontFamily: '"Kolker Brush", cursive'
}
let styleBrandLowerCase={
    fontFamily: '"Island Moments", cursive'
}


const Logo = (props) => {

    return(
        <div className='logo component' style={styles}>
            {/* {props.children == undefined ? "Elizabeths Phonebook" : props.children} */}
            <span style={styleName} className='logo component name'>{props.firstName}s </span>
            <span className='logo component brand' style={styleBrand}>
                <span style={styleBrandCapital}>P</span>
                <span style={styleBrandLowerCase}>honebook</span>
            </span>
        </div>
    )

}

export default Logo;
