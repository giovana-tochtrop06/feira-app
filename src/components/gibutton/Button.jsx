import React from 'react';
import "./button.styles.css"

const Button = ({children, type}) => {
  const classColor = ['red', 'green', 'yellow']

  return (
    <button className={classColor.includes(type) ? type : 'yellow'}>{children}</button>
  );
};

export default Button;
