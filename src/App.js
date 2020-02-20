import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Counter from "./components/Counter";
// import ReactDOM from "react-dom";
import CountersTotal from "./components/CountersTotal";
import AddCounter from "./components/AddCounter";

let elCounters = [{name: "First counter", initialValue: 0, step: 1, currentValue: 0},
    {name: "Second counter", initialValue: 3, step: 2, currentValue: 3},
    {name: "Next counter", initialValue: 1, step: 1, currentValue: 1}];

// function promoteName(name, initialValue, step) {
//     elCounters = [...elCounters].concat([{name: name, initialValue: initialValue, step: step}])
//     ReactDOM.render(<App />, document.getElementById('root'));
// }

function App() {

    const [counterList, setCounterList] = useState(elCounters);
    const [counter, setCounter] = useState(elCounters.reduce( (sum, el) =>
        sum + el.initialValue, 0));
    const [hasResetButtonBeenClicked, setResetButtonHasBeenClicked] = useState(false);
    // hasButtonBeenClicked, setHasButtonBeenClicked
    // const [counters, setCountersData] = useState(elCounters);

    const incrementCounter = (increment) => {
        setCounter(counter + increment)
    }

    function resetCounter(value) {
        if (value){
            setResetButtonHasBeenClicked(true);
        }
    }

    function buttonClicked(name) {
        console.log('CLICKED!' + name)
    }

    // function setResetNotClicked() {
    //     setResetButtonHasBeenClicked(false);
    // }

    const resetTotalCount = (value) => {
        if (value) {
            setCounter(counterList.reduce( (sum, el) =>
                sum + el.initialValue, 0));
            setResetButtonHasBeenClicked(true);
        }
    }

    const deleteCounter = (elName) => {
        console.log('before '+counterList);
        setCounterList([...counterList].filter(function (el) {
            return el.name !== elName;
        }));
        console.log('after '+counterList);
        // setCounter(counterList.reduce( (sum, el) =>
        //     sum + el.initialValue, 0));
        // setCountersData([...counters].filter(function (el) {
        //     return el.name !== elName;
        // }))
        // console.log('app '+counters);
    }

     const addNewCounter = (counterName, counterInitialValue, counterStep) => {
        setCounterList([...counterList].concat([{
            name: counterName,
            initialValue: counterInitialValue,
            step: counterStep
        }]));
        setCounter(counter + counterInitialValue);
        // setTotal(counterList.map(el => el.number).reduce((a, b) => a + b));
        //console.log(counterList);
    }

    const items = [{text: 'Home', link: 'goods-page'},
        {text: 'Goods', link: 'goods-page'},
        {text: 'Products', link: 'products-page'},
        {text: 'Services', link: 'services-page'},
        {text: 'News', link: 'news-page'},
    ]
    const items2 = [{text: 'Home', link: 'goods-page'},
        {text: 'Contacts', link: 'contacts-page'},
        {text: 'Help', link: 'help-page'},
        {text: 'Support', link: 'support-page'},
        {text: 'Jobs', link: 'jobs-page'},
    ]
    const footerText = "React Native combines the best parts of native development " +
        "with React, a best-in-class JavaScript library for building user interfaces."

    return (
        <div className="App">
            <Header items={items}/>
            {/*<Content bc={buttonClicked}/>*/}
            <CountersTotal
                counter={counter}
                setCounter={setCounter}
                resetCounter={resetCounter}
                resetTotalCount={resetTotalCount}
                setResetButtonHasBeenClicked={setResetButtonHasBeenClicked}
            />
            Total: {counter}
            <p>Counters</p>
            <hr/>
            {counterList.map((el, i) =>
                <Counter
                    name={el["name"]}
                    key={i}
                    num={el["initialValue"]}
                    step={el["step"]}
                    ind={i}
                    incrementCounter={incrementCounter}
                    deleteCounter={deleteCounter}
                    hasResetButtonBeenClicked={hasResetButtonBeenClicked}
                    setResetButtonHasBeenClicked={setResetButtonHasBeenClicked}
                    // updateData={ updateData }
                    // counters={ counters }
                />
            )}
            <hr/>
            <p>Add new counter</p>
            < AddCounter addNewCounter={ addNewCounter }/>
            <hr/>
            <Footer items={items} items2={items2} footerText={footerText}/>
        </div>
    );
}

export default App;
