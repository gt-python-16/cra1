import React from 'react';

const MenuItem = (props) => {
  return (
    <li>
      <a href={props.menuItem.link}>{ props.menuItem.text }</a>
    </li>
  );
}

export default MenuItem;
