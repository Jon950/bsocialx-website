// React
import React from 'react';

// CSS
import '../styleSheet/smallAbout.css';

// Images
import AppIcon from "../images/appIcon.jpg";

function SmallAbout() {
  return (
   <section id="about" className="smallAbout">

       <div className="textBox">
           <h2>Learn about BsocialX</h2>
           <p>A simplified way to rate your friends and find new ones.</p>
       </div>
       <img src={AppIcon} alt="BsocialX Icon" className="appIcon" width="200" height="200" />

   </section>
  );
}

export default SmallAbout;
