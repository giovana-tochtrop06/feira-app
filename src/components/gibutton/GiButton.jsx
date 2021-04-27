import React from 'react';
import "./gibutton.styles.css"

const GiButton = ({children, type}) => {
  const classColor = ['red', 'green', 'yellow']

  return (
    <button className={classColor.includes(type) ? type : 'yellow'} > {children} </button>
  );
};

export default GiButton;
