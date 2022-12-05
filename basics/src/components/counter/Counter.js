import React, {useState, useEffect} from 'react';
import Number from './Number';
import CounterButton from './CounterButton';


const Counter = (props) => {

    const [points, setPoints] = useState(0);
    const [goal, setGoal] = useState(11);
    // console.log(useState(0));
    useEffect(() => {
        console.log('Runs every render or on data change.');
    })
    useEffect(() => {
        console.log('Run on first render only');
    }, []);
    useEffect(() => {
        console.log('Runs when goal is hit');
    }, [goal])

    return (
        <div className='counter' style={{position: 'relative'}}>
            <Number digit={points}/>
            <div className='counter__buttons'>
                <CounterButton
                    operator="minus"
                    checkPoints={setPoints}
                    number={points}
                    className='minus'
                    setGoal={setGoal}
                    myGoal={goal}
                >
                    -
                </CounterButton>
                <CounterButton
                    operator="plus"
                    checkPoints={setPoints}
                    number={points}
                    className='plus'
                    setGoal={setGoal}
                    myGoal={goal}
                >
                    +
                </CounterButton>
            </div>
            <span style={{fontSize: 'larger', padding: '5px', color: 'yellow'}}>Next goal is {goal}</span>
        </div>
    )

}

export default Counter;
