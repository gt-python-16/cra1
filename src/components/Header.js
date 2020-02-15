import React from 'react';
import Menu from "./Menu";
import Logo from "./Logo";

// const items = [{'text': 'Home', 'link': 'goods-page'},
//     {'text': 'Goods', 'link': 'goods-page'},
//     {'text': 'Products', 'link': 'goods-page'},
//     {'text': 'Services', 'link': 'goods-page'},
//     {'text': 'Contacts', 'link': 'goods-page'},
//     {'text': 'Jobs', 'link': 'goods-page'},
// ]

const Header = ({ items }) => {
  return (
    <header>
        <div className="container">
            <Logo />
            <Menu items={items}/>
        </div>
    </header>
  );
}

export default Header;
