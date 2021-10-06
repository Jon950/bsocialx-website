// React
import React, { useState } from 'react';

// CSS
import '../styleSheet/appHomeView.css';

// Icons
import {FaUserFriends} from "react-icons/fa";
import {BiNetworkChart} from "react-icons/bi";

function AppHomeView() {
    const [numberOfFriends, setNumberOfFriends] = useState(234);
    const [numberOfGroups, setNumberOfGroups] = useState(31);

    const countUpTo = (num:number, setNum: Function) => {
        if(num > 999) {
            setNum(0);
        } else {
            setNum((currNum: number) => currNum + 1);
        }
    }

  return (
   <div className="appHomeView">
       <div className="userProfile">
           <p>J</p>
       </div>

       <div className="userName">
           <p>Jon M.</p>
       </div>

       <div className="starRating">
           <p>* * * * *</p>
       </div>
       
       <div className="numberBoxs">
            <div className="numberBox clickBoxOne" onClick={() => countUpTo(numberOfFriends, setNumberOfFriends)}>
                <FaUserFriends size={30} className="icon"/>
                <p>{numberOfFriends}</p>
                <p>Friends</p>
            </div>

            <div className="numberBox clickBoxTwo" onClick={() => countUpTo(numberOfGroups, setNumberOfGroups)}>
                <BiNetworkChart  size={30} className="icon"/>
                <p>{numberOfGroups}</p>
                <p>Groups</p>
            </div>
       </div>
   </div>
  );
}

export default AppHomeView;
