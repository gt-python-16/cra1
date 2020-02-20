import React from "react";

function CountersTotal(props) {

    const resetAllCounters = () => {
        props.resetTotalCount(true);
    };

    return (
        <div>
            <span>Total count: {props.count} </span>
            <button onClick={resetAllCounters}> Reset all counters </button>
        </div>
    );
}

export default CountersTotal;