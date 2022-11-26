import React from 'react';


const CounterButton = (props) => {

    // const clickButton = () => {
    //     console.log('got clicked');
    // }

    const checkButton = () => {
        if (props.operator == 'minus') {
            // console.log(props.operator);
            props.setPoints(0);
        }
        if (props.operator == 'plus') {
            // console.log(props.operator);
            props.setPoints(1);
        }
    }

    return (
        <button className='counter__button' onClick={checkButton}>{props.children}</button>
    )
}

export default CounterButton;
