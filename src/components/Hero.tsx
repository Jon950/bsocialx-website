// React
import React, { useState } from 'react';

// CSS
import '../styleSheet/hero.css';

// Images
import HeroBackground from "../images/cellPhone-TopDown-952414660.jpg";
import PhoneHomeView from "../images/phoneView/inspiration-intro-BsocialX-noNumbers.png";

function Hero() {
    const [numberOfFriends, setNumberOfFriends] = useState(234);
    const [numberOfGroups, setNumberOfGroups] = useState(31);

    const countUpTo = (num:number, setNum: Function) => {
        if(num > 999) {
            setNum(0);
        } else {
            setNum(num + 1);
        }
    }
  return (
   <section className="hero">
           
       <div className="showBox">
            <div className="textBox">
                <h1>Bsocial<span className="theX">X</span></h1>
                <p>Be the First to win!</p>
            </div>
            
            <div className="imageBox">
                <div className="numberBox clickBoxOne" onClick={() => countUpTo(numberOfFriends, setNumberOfFriends)}>
                    <p className="numbers numberOne">{numberOfFriends}</p>
                </div>

                <div className="numberBox clickBoxTwo" onClick={() => countUpTo(numberOfGroups, setNumberOfGroups)}>
                    <p className="numbers numberTwo">{numberOfGroups}</p>
                </div>
                <img src={PhoneHomeView} alt="BsocialX app on a smartphone" className="phoneHomeView" width="296" height="606" />
                <a href="https://bsocialx.netlify.app" className="smallaTagBtn">Sign Up with BsocialX</a>
            </div>
       </div>
       <img src={HeroBackground} alt="College students in a circle on cell phones" className="heroBackground" width="1200" height="765" />
   </section>
  );
}

export default Hero;
