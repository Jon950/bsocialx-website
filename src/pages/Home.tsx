// React
import React from 'react';

// Components
import Hero from "../components/Hero";
import SmallAbout from "../components/SmallAbout";
import Feachers from "../components/Feachers";
import Footer from "../components/Footer";

function Home() {
  return (
   <>
   <Hero />
   <main>
       <SmallAbout/>
       <hr />
       <Feachers />
   </main>
   <Footer />
   </>
  );
}

export default Home;
