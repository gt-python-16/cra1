import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
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
      <Content/>
      <Footer items={items} items2={items2} footerText={footerText}/>
    </div>
  );
}

export default App;
