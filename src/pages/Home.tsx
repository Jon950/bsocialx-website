// React
import React from 'react';

// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
// import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import 'swiper/swiper-bundle.css';


// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import SmallAbout from "../components/SmallAbout";
import Feachers from "../components/Feachers";
import Footer from "../components/Footer";

// CSS
import "../styleSheet/home.css"

function Home() {
  const items = [
    {id: "1", title: "e"},
    {id: "2", title: "D"},
    {id: "3", title: "g"},
    {id: "4", title: "s"},
    {id: "5", title: "e"},
    {id: "6", title: "D"},
    {id: "7", title: "g"},
    {id: "8", title: "s"}
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
      //  modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
         {items.map((item) => 
           <SwiperSlide tag="li" key={item.id} className="card">{item.title}</SwiperSlide>
         )}
      ...
    </Swiper>
       <hr />
       <Feachers />
   </main>
   <Footer />
   </>
  );
}

export default Home;
