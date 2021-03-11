import React from 'react';

import './footer.css';

const Footer = ({footerColor, content}) => {
  let footerClass = '';
  
  if (footerColor == 'purple') {
    footerClass = 'footerpurple';
  } 
  if (footerColor == 'blue'){
    footerClass = 'footerblue';
  }

  return (
    <div className={footerClass}> {content} </div>
  );
};

export default Footer;
