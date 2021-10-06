// React
import React from 'react';

// CSS
import '../styleSheet/hero.css';

// Images
import HeroBackground from "../images/cellPhone-TopDown-952414660.jpg";

// Components
import AppHomeView from './AppHomeView';

function Hero() {
    
  return (
   <section className="hero">
           
       <div className="showBox">
            <div className="textBox">
                <h1>Bsocial<span className="theX">X</span></h1>
                <p>Be the First to win!</p>
            </div>

            <AppHomeView />
            <div className="smallaTagBtnBox">
                <a href="https://bsocialxapp.netlify.app" className="smallaTagBtn">Sign Up with BsocialX</a>
            </div>
       </div>
       <img src={HeroBackground} alt="College students in a circle on cell phones" className="heroBackground" height="765" />
   </section>
  );
}

export default Hero;
