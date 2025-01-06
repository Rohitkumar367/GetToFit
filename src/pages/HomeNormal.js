import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';
import ParallaxContent from '../components/ParallaxContent';

const Home = () => {

  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <ParallaxContent/>
    </div>
  );
};

export default Home;
