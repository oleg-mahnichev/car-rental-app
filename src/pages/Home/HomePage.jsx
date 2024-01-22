// Home.js
import React from 'react';
import {
  HeroContainer,
  HeroImage,
  HeroText,
  HeroTitle,
  HeroDescription,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HeroContainer>
      <HeroImage src="/home_photo.jpg" alt="HERO" />
      <HeroText>
        <HeroTitle>Car rental in central and eastern Europe</HeroTitle>
        <HeroDescription>Details...</HeroDescription>
      </HeroText>
    </HeroContainer>
  );
};

export default HomePage;
