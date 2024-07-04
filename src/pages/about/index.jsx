// src/pages/about.jsx
import React from 'react';
import Review from "./components/review";
import Hero from "./components/hero";
import Feeds from "./components/feeds";
import Discover from "./components/discover";
import SignupForm from '../../components/SignupForm';

const About = () => {
  return (
    <div>
      <Review />
      <Hero />
      <Feeds />
      <Discover />
     <SignupForm />
    </div>
  );
};

export default About;
