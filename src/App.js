import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Counter from "./components/Counter";

// const ind = [0,1]
// const arr = [1,2]
// const sumArr = (arr) => arr.reduce((partial_sum, a) => partial_sum + a,0);
// const initData = {arr: arr, sum: sumArr(arr)}

let elCounters = [{defaultValue:0, step:1}, {defaultValue:1, step:2}];

function App() {
    const defaultSum = elCounters.reduce( (sum, el) => sum + el.defaultValue, 0);
    const [counter, setCounter] = useState(defaultSum);

    const incrementCounter = (increment) => {
        setCounter(counter + increment)
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
        {elCounters.map((el,i) =>
            <Counter
                key={i}
                num={el["defaultValue"]}
                step = {el["step"]}
                incrementCallback={ incrementCounter }
            />
        )}
        <hr/>
      <Footer items={items} items2={items2} footerText={footerText}/>
    </div>
  );
}

export default App;
