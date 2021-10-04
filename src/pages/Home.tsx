// React
import React from 'react';

// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import SmallAbout from "../components/SmallAbout";
import Feachers from "../components/Feachers";
import Footer from "../components/Footer";

// CSS
import "../styleSheet/home.css"

// Image
import PhoneSignInView from  "../images/phoneView/inspiration-intro-BsocialX-Welcome.png";
import PhoneHomeView from  "../images/phoneView/inspiration-intro-BsocialX.png";
import PhoneFriendView from  "../images/phoneView/inspiration-intro-BsocialX-table.png";

function Home() {
  const items = [
    {id: "1", title: "Sign in with Google!", details: "Use your Google account to sign in to the BsocialX app. To sign in just click Sign in with Google. If you don't have an account with BsocialX, just click Sign in with Google it will make one for you. You won't have to remember individual usernames and passwords for each account.", url: PhoneSignInView},
    {id: "2", title: "Find everthing on your home page", details: "", url: PhoneHomeView},
    {id: "3", title: "Find all your friends and new one", details: "", url: PhoneFriendView}
  ]
  return (
   <>
   <Header />
   <Hero />
   <main>
       <SmallAbout/>
       <hr />
       <Swiper 
       tag="section" 
       wrapperTag="ul" 
       className="carousel" 
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>

         {items.map((item) => 
            <SwiperSlide tag="li" key={item.id} className="card">
              <img src={item.url} alt="" width="130" height="280" ></img>
              <div className="textBox">
                <h4>{item.title}</h4>
                <p>{item.details}</p>
              </div>
           
           </SwiperSlide>
         )}
    </Swiper>
       <hr />
       <Feachers />
   </main>
   <Footer />
   </>
  );
}

export default Home;
