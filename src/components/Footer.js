import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

const Footer = ({ items, items2, footerText }) => {
  return (
      <footer>
          <div className="container">
              <Logo />
              <p>{footerText}</p>
              <Menu items={items2}/>
              <Menu items={items}/>
          </div>
      </footer>
  );
}

export default Footer;
