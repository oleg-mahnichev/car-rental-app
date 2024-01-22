// HeroStyles.js
import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const HeroImage = styled.img`
  width: 100%; 
  height: auto; 
`;

export const HeroText = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Цвет текста */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Тень текста */
`;

export const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

export const HeroDescription = styled.p`
  font-size: 1.2em;
`;
