import React, { useState } from 'react';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';

const Home = () => {

  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
    </div>
  );
};

export default Home;
