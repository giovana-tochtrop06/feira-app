import React from 'react';

import './footer.css';

// const Footer = ({footerColor, children, footerTextColor, showRights }) => {
//   const rights = 'site feito por Giovana 2021. Todos os Direitos Reservados'

//   const footerClass = (footerColor == 'purple' ? 'footerpurple' : 'footerblue');
//   const textClass = (footerTextColor == 'black' ? 'fingerblack' : 'fingerwhite');

//   return (
//     <div className={`footer ${footerClass} ${textClass}`}> 
//       {showRights && <p className="pclass">
//         {rights}
//       </p>}
//       <p className="pclass">
//         {children}
//       </p> 
//     </div>
//   );
  
// };

const Footer = () => {

  return (
    <div className="footer"> Feito por Giovana Tochtrop @2021 </div>
  );
};

export default Footer;
