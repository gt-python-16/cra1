import React, { useState, useEffect } from 'react';

const Counter = (props) => {
    const [elCount, setElCount] = useState(props.num);
    // const [counter, setCounters] = useState()

    const[ isReset, setReset] = useState(false);
    useEffect(() => {
        console.log('effect before; '+ elCount);
        setElCount(props.num);
        return () => props.setResetButtonHasBeenClicked(false);
        console.log('effect after; '+ elCount);
    }, [props.hasResetButtonBeenClicked]);

    const countChangePlusHandler =  () => {
        // props.setResetButtonHasBeenClicked(false);
        setElCount(elCount + props.step);
        props.incrementCounter(props.step);
        // props.updateData(props.ind, elCount + props.step);
        // setHasButtonBeenClicked(true);
    }
    const countChangeMinusHandler =  () => {
        // props.setResetButtonHasBeenClicked(false);
        setElCount(elCount - props.step)
        props.incrementCounter(-props.step);
        // props.updateData(props.ind, elCount - props.step);
        // setHasButtonBeenClicked(true);
    }
    const resetCounterHandler =  () => {
        // props.setResetButtonHasBeenClicked(false);
        setElCount(props.num);
        props.incrementCounter(-elCount+props.num);
        // props.updateData(props.ind, props.num);
        // setHasButtonBeenClicked(false);
    }
    const deleteCounterHandler =  () => {
        // props.setResetButtonHasBeenClicked(false);
        props.deleteCounter(props.name);
        props.incrementCounter(-elCount);
        // // console.log(props.ind, props.counters, props.counters.length);
        // // console.log(props.counters[props.ind].currentValue)
        // setElCount(props.counters.length > props.ind+1 && props.counters[props.ind+1].currentValue);
        // // console.log(props.counters)
        // // props.updateData(props.ind, elCount - props.step);
        // // setHasButtonBeenClicked(false);
    }



  return (
      <div>
          <div>
              <span> {props.name} </span>
              <div> Increment step step: {props.step}</div>
              <button onClick={countChangeMinusHandler}>-</button>
              {elCount}
              <button onClick={countChangePlusHandler}>+</button>
              <button onClick={resetCounterHandler}>Reset</button>
              <button onClick={deleteCounterHandler}>Delete</button>
              <hr/>
          </div>
      </div>
  );
}

export default Counter;
