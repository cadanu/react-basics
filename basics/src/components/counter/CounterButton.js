import React from 'react';


const CounterButton = (props) => {

    // const clickButton = () => {
    //     console.log('got clicked');
    // }
    // props.setPoints = (foo) => {
    //     alert('we in this');
    // }
    let localGoal;


    const checkButton = () => {
        localGoal = props.goal;

        if ((props.operator === 'minus') && (props.number > 0)) {
            console.log(props.checkPoints); 
            props.checkPoints(props.number - 1);
        }

        if (props.operator === 'plus') {
            console.log(props.checkPoints);
            props.checkPoints(props.number + 1);

            if (props.myGoal == props.number+1) {
                // alert('hit goal' + props.number);
                localGoal = props.number;
                props.setGoal((props.number+11)*2)
            }
        }


        // if (props.myGoal == props.number) {
        //     console.log('inside goal');
        //     if ((props.operator === 'minus') && (props.number > 0)) {
        //         alert('hit goal going down');
        //     }
        //     if (props.operator === 'plus') {
        //         alert('hit goal going up');
        //     }
        // }
    }

    return (
        <button className='counter__button'  onMouseUp={checkButton} onKeyDown={checkButton}>{props.children}</button>

    )
}

export default CounterButton;
