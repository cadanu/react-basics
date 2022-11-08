import React from 'react';
import Number from './Number';
import CounterButton from './CounterButton';


const Counter = (props) => {

    return (
        <div className='counter'>
            <Number></Number>
            <div className='counter__buttons'>
                <CounterButton>-</CounterButton>
                <CounterButton>+</CounterButton>
            </div>
        </div>
    )

}

export default Counter;
