import React from 'react';
import MenuItem from "./MenuItem";


const Menu = (props) => {

  return (
      <nav>
          <ul>
              {props.items.map(el => <MenuItem key={el.text} menuItem={el} />)}
          </ul>
      </nav>
  );
}

export default Menu;
