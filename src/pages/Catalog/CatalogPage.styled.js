import styled from 'styled-components';

export const CatalogConteiner = styled.div`
 display: grid;
 width: 1184px; 
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 30px; 
margin: 0 auto; 
`;
export const LoadMoreBtn = styled.button`
display: block;
color: #3470FF;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
text-decoration-line: underline;
border: none;
background: none;
margin:0 auto;
cursor: pointer;
`;
