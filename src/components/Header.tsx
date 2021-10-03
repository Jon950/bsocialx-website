// React
import React from 'react';

// CSS
import '../styleSheet/header.css';

function Header() {
  return (
   <header>
       <nav>
           <ul>
               <li><a href="#home" >Home</a></li>
               <li><a href="#about" >About</a></li>
               <li><a href="#feachers" >Feachers</a></li>
           </ul>
       </nav>
   </header>
  );
}

export default Header;
