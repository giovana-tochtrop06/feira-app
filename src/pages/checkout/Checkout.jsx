import React from 'react';

const Checkout = () => {
  const onClick = () => {
    localStorage.setItem('Test', 'ola');
  }
  return(
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default Checkout;
