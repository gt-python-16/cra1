import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import CounterItems from "./components/CounterItems";


function App() {
    let elCounters = [{name: "First counter", initialValue: 0, step: 1, currentValue: 0},
        {name: "Second counter", initialValue: 3, step: 2, currentValue: 3},
        {name: "Next counter", initialValue: 1, step: 1, currentValue: 1}];
    const [counterList, setCounterList] = useState(elCounters);
    const [counterName, setCounterName] = useState('');
    const [counterInitialValue, setCounterInitialValue] = useState(0);
    const [counterStep, setCounterStep] = useState(1);
    const [counter, setCounter] = useState(counterList.reduce( (sum, el) =>
        sum + el.initialValue, 0));
    const [counters, setCountersData] = useState(elCounters);

    const incrementCounter = (increment) => {
        setCounter(counter + increment)
    }

    const updateData = (index, newValue) => {
        console.log(index, newValue, counters);
        setCountersData([
            ...counters.slice(0,index),
            {...counters[index] , currentValue: newValue},
            ...counters.slice(index+1)
        ]);
        console.log(counters);
    }

    const deleteCounter = (elName) => {
        setCounterList([...counterList].filter(function (el) {
            return el.name !== elName;
        }));
        setCountersData([...counters].filter(function (el) {
            return el.name !== elName;
        }))
        console.log('app '+counters);
    }

    const inputNameChangeHandler = event => {
        setCounterName(event.target.value);
        console.log('adding name: '+ event.target.value);
    }

    const inputInitialValueChangeHandler = event => {
        setCounterInitialValue(parseInt(event.target.value));
        console.log('adding initial value: '+ parseInt(event.target.value));
    }

    const inputStepChangeHandler = event => {
        setCounterStep(parseInt(event.target.value));
        console.log('adding counter step: '+ event.target.value);
    }

    const counterAddHandler = () => {
        setCounterList([...counterList].concat([{name: counterName, initialValue: counterInitialValue, step: counterStep}]));
        setCounter(counter+counterInitialValue);
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
      Total: {counter}
      <hr/>
        {counterList.map((el,i) =>
            <CounterItems
                name={el["name"]}
                key={i}
                num={el["initialValue"]}
                step = {el["step"]}
                ind={i}
                incrementCallback={ incrementCounter }
                deleteCounter={ deleteCounter }
                updateData={ updateData }
                counters={ counters }
            />
        )}
        <hr/>
        <div>
            <span>Add new counter</span>
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
        <hr/>


      <Footer items={items} items2={items2} footerText={footerText}/>
    </div>
  );
}

export default App;
