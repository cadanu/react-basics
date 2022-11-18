import React, {useState} from 'react';
import Number from './Number';
import CounterButton from './CounterButton';


const Counter = (props) => {

    const [points, setPoints] = useState(0);
    // console.log(useState(0));

    return (
        <div className='counter'>
            <Number digit={points}/>
            <div className='counter__buttons'>
                <CounterButton operator="minus" points={points} checkPoints={setPoints} className='minus'>-</CounterButton>
                <CounterButton operator="plus" points={points} checkPoints={setPoints} className='plus'>+</CounterButton>
            </div>
        </div>
    )

}

export default Counter;
