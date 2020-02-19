import React, { useState } from 'react';

const CounterItems = (props) => {
    const[ hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
    const [elCount, setElCount] = useState(props.num);
    // const [counter, setCounters] = useState()

    const countChangePlusHandler =  (sign) => {
        setElCount(elCount + props.step);
        props.incrementCallback(props.step);
        props.updateData(props.ind, elCount + props.step);
        // setHasButtonBeenClicked(true);
    }
    const countChangeMinusHandler =  () => {
        setElCount(elCount - props.step)
        props.incrementCallback(-props.step);
        props.updateData(props.ind, elCount - props.step);
        // setHasButtonBeenClicked(true);
    }
    const resetCounterHandler =  () => {
        setElCount(props.num);
        props.incrementCallback(-elCount+props.num);
        props.updateData(props.ind, props.num);
        // setHasButtonBeenClicked(false);
    }
    const deleteCounterHandler =  () => {
        props.deleteCounter(props.name);
        props.incrementCallback(-elCount);
        console.log(props.ind, props.counters, props.counters.length);
        console.log(props.counters[props.ind].currentValue)
        setElCount(props.counters.length > props.ind+1 && props.counters[props.ind+1].currentValue);
        console.log(props.counters)
        props.updateData(props.ind, elCount - props.step);
        // setHasButtonBeenClicked(false);
    }
  return (
      <div>
          <div>
              <div> Increment/decrement step: {props.step}</div>
              <span> {props.name} </span>
              <button onClick={countChangeMinusHandler}>-</button>
              {elCount}
              <button onClick={countChangePlusHandler}>+</button>
              {/*{ hasButtonBeenClicked && <div> Button Clicked!</div>}*/}
              <button onClick={resetCounterHandler}>Reset</button>
              <button onClick={deleteCounterHandler}>Delete</button>
              <hr/>
          </div>
      </div>
  );
}

export default CounterItems;
