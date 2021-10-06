// React
import React, { useEffect, useState } from 'react';

// CSS
import '../styleSheet/appHomeView.css';

// Icons
import {FaUserFriends} from "react-icons/fa";
import {BiNetworkChart} from "react-icons/bi";

//  Components
import StarRatingBar from './StarRatingBar';

function AppHomeView() {
    const [user, setUser] = useState({picture: {large: ""}, name: {first: "", last: ""}, dob: {age: 0}});

    const setNewUser = () => {
        fetch('https://randomuser.me/api/').then((users) => users.json().then((user) => setUser(user.results[0])));
    }

    useEffect(() => {
        fetch('https://randomuser.me/api/').then((users) => users.json().then((user) => setUser(user.results[0])));
    },[])

  return (
   <div className="appHomeView">
       <div className="userProfile" onClick={setNewUser}>
       <img src={user.picture.large} alt="Foo eating a sandwich." />
       </div>

       <div className="userName">
           <p>{user.name.first} {user.name.last}</p>
       </div>

       <div className="starRating">
           <StarRatingBar  numberOfStars={user.dob.age / 15}/>
       </div>
       
       <div className="numberBoxs">
            <div className="numberBox clickBoxOne">
                <FaUserFriends size={30} className="icon"/>
                <p>{user.dob.age * 6}</p>
                <p>Friends</p>
            </div>

            <div className="numberBox clickBoxTwo">
                <BiNetworkChart  size={30} className="icon"/>
                <p>{user.dob.age}</p>
                <p>Groups</p>
            </div>
       </div>
   </div>
  );
}

export default AppHomeView;
