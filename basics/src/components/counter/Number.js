import React from 'react';


const Number = (props) => {
    return (
        <div className='counter__display'>
            <div className='number'>
                {props.digit}
            </div>
        </div>
    )
}

export default Number;
