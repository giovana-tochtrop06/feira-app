import React from 'react';

import './title.css'

// const Title = ({ children, type }) => {
//   console.log(type);

//   return (
//     <div>
//       {type === 'primary' && <div className="primary"> {children} </div>}

//       {type === 'secondary' && <div className="secondary"> {children} </div>}

//       {type === 'normal' && <div className="normal"> {children} </div>}
//     </div>
//   )
// }

// const Title = ({ children, type }) => {
//   if (type === 'primary') {
//     console.log('é igual a porra')
//   }

//   return (
//     <div>
//       <div className={type}> {children} </div>
//     </div>
//   )
// }

const Title = ({ type, children }) => {
  const allowedTypes = ['primary', 'secondary', 'normal'];
  
  return (
    <div className={allowedTypes.includes(type) ? type : 'normal'}>
      {children}
    </div>
  );
}

export default Title; 
