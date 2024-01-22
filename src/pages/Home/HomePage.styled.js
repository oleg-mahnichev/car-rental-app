// HeroStyles.js
import styled from 'styled-components';

export const HeroContainer = styled.div`
width:100%;
`;

// export const HeroImage = styled.img`
//   width: 100%; 
//   height: auto; 
// `;

export const HeroText = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  color: white; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

export const HeroDescription = styled.p`
  font-size: 1.2em;
`;
