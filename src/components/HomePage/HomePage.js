import React from 'react';
import { AboutSlide , FutureSlide, HomeSlide, HowSlide, TeamSlide } from '../../components/home/Home';

function HomePage() {
  return (
  <div className='Main-Container'>
          <HomeSlide></HomeSlide>
          <AboutSlide></AboutSlide>
          <HowSlide></HowSlide>
          <FutureSlide></FutureSlide>
          <TeamSlide></TeamSlide>
        </div>
  );
}

export default HomePage;
