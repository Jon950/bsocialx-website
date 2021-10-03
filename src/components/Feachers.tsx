// React
import React from 'react';

// CSS
import '../styleSheet/feachers.css';

// Images
import PhoneHomeView from "../images/phoneView/inspiration-intro-BsocialX-noNumbers.png";

function Feachers() {
  return (
   <section id="feachers" className="feachersBox">
        <img src={PhoneHomeView} alt="BsocialX app on a smartphone" className="phoneHomeView" />

       <div className="textBox">
           <h2>BsocialX feachers</h2>
          <ul>
            <li>Find your friends</li>
            <li>Find a group</li>
            <li>Rate them all!</li>
          </ul>
       </div>

   </section>
  );
}

export default Feachers;
