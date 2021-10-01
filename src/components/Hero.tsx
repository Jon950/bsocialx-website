// React
import React from 'react';

// CSS
import '../styleSheet/hero.css';

// Images
import BrookdaleMascot from "../images/brookdale-community-college-mascot-logo.svg"

function Hero() {
  return (
   <section className="hero">
       <img src={BrookdaleMascot} alt="Brookdale mascot" className="brookdaleMascot" />
       <div className="textBox">
           <h1>BsocialX</h1>
           <p>Be the First to win!</p>
       </div>
   </section>
  );
}

export default Hero;
