import React, {useState} from 'react';

const AddCounter = (props) => {

    const [counterName, setCounterName] = useState('');
    const [counterInitialValue, setCounterInitialValue] = useState(0);
    const [counterStep, setCounterStep] = useState(1);

    const inputNameChangeHandler = event => {
        setCounterName(event.target.value);
        // console.log('adding name: '+ event.target.value);
    }

    const inputInitialValueChangeHandler = event => {
        setCounterInitialValue(parseInt(event.target.value));
        // console.log('adding initial value: '+ parseInt(event.target.value));
    }

    const inputStepChangeHandler = event => {
        setCounterStep(parseInt(event.target.value));
        // console.log('adding counter step: '+ event.target.value);
    }

    const counterAddHandler = () => {
        props.addNewCounter(counterName, counterInitialValue, counterStep )
        // setCounterList([...counterList].concat([{
        //     name: counterName, initialValue: counterInitialValue, step: counterStep
        // }]));
        // setCounter(counter + counterInitialValue);
    }

    return (
        <div>
            <span>Name </span>
            <input
                type="text"
                placeholder="Name"
                onChange={inputNameChangeHandler}
                value={counterName}
            />
            <span> Initial value </span>
            <input
                type="number"
                placeholder="0"
                onChange={inputInitialValueChangeHandler}
                value={counterInitialValue}
            />
            <span> Counter step </span>
            <input
                type="number"
                placeholder="1"
                onChange={inputStepChangeHandler}
                value={counterStep}
            />
            <button type="button" onClick={counterAddHandler}>Add</button>
        </div>
    );
}

export default AddCounter;
