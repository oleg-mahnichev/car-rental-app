import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 274px;
  height: 426px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  flex-shrink: 0;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;
  object-fit: cover; 
`;

export const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  color: #121417;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
`;

export const Description = styled.p``;

export const Price = styled.p``;

export const Mileage = styled.p``;


export const LearnMoreButton = styled.button`
width: 274px;
height: 44px;
padding: 12px 99px;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.42; /* 142.857% */
`;
