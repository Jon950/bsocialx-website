// React
import React from 'react';

// CSS
import '../styleSheet/feachers.css';

// Images
import PhoneHomeView from "../images/phoneView/inspiration-intro-BsocialX-noNumbers.png";

function Feachers() {
  return (
   <section className="feachersBox">
        <img src={PhoneHomeView} alt="BsocialX app on a smartphone" className="phoneHomeView" width="296" height="606" />

       <div className="textBox">
           <h2>BsocialX feachers</h2>
           <p>Fimd your friends</p>
           <p>Fimd a group</p>
           <p>Rate them all!</p>
       </div>

   </section>
  );
}

export default Feachers;
