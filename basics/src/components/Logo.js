import React from 'react';

export default function(props) {
    return(
        <div>
            {props.children == undefined ? "Phonebook" : props.children}
        </div>
    )
}
