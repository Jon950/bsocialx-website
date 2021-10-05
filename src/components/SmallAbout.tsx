// React
import React from 'react';

// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

// CSS
import '../styleSheet/smallAbout.css';

// Images
import AppIcon from "../images/appIcon.jpg";
import PhoneSignInView from  "../images/phoneView/inspiration-intro-BsocialX-Welcome.png";
import PhoneHomeView from  "../images/phoneView/inspiration-intro-BsocialX.png";
import PhoneFriendView from  "../images/phoneView/inspiration-intro-BsocialX-table.png";

function SmallAbout() {
  SwiperCore.use([Autoplay]);
  const items = [
    {id: "1", title: "Learn about BsocialX", details: "A simplified way to rate your friends and find new ones.", url: AppIcon, altTag: "Brookdale mascot", className: "appIcon"},
    {id: "2", title: "Sign in with Google!", details: "Use your Google account to sign in to the BsocialX app. To sign in just click Sign in with Google. If you don't have an account with BsocialX, just click Sign in with Google it will make one for you. You won't have to remember individual usernames and passwords for each account.", url: PhoneSignInView, altTag: "BsocialX sign in page", className: "phoneView"},
    {id: "3", title: "Find everthing on your home page", details: "BsocialX app homepage is the door to a world of social interaction, and a good start is half the battle.", url: PhoneHomeView, altTag: "BsocialX home page", className: "phoneView"},
    {id: "4", title: "Find all your friends and new one", details: "Small acts of kindness can make a big impact. Find people and make that difference.", url: PhoneFriendView, altTag: "BsocialX friend finder page", className: "phoneView"}
  ];

  return (
   <section id="about" className="smallAbout">

<Swiper 
       tag="section" 
       wrapperTag="ul" 
       className="carousel"
       spaceBetween={200}
       slidesPerView={1}
       loop={true}
       autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      speed={3000}
      slidesOffsetBefore={-20}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>

         {items.map((item) => 
            <SwiperSlide tag="li" key={item.id} className={item.className}>

              <div className="textBox">
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
              <img src={item.url} alt={item.altTag}  ></img>
      
           </SwiperSlide>
         )}
    </Swiper>
   </section>
  );
}

export default SmallAbout;
