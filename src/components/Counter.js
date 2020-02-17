import React, { useState } from 'react';

const Counter = (props) => {
    const[ hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
    const [elCount, setElCount] = useState(props.num);
    // const [counters, setCounters] = useState()

    const countChangePlusHandler =  (sign) => {
        setElCount(elCount + props.step)
        props.incrementCallback(props.step);
        setHasButtonBeenClicked(true);
    }
    const countChangeMinusHandler =  () => {
        setElCount(elCount - props.step)
        props.incrementCallback(-props.step);
        setHasButtonBeenClicked(true);
    }

  return (
      <div>
          <div> Increment/decrement step: {props.step}</div>
          <button onClick={countChangeMinusHandler}>-</button>
          {elCount}
          <button onClick={countChangePlusHandler}>+</button>
          { hasButtonBeenClicked && <div> Button Clicked!</div>}
          <hr/>
      </div>
  );
}

export default Counter;
