import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px;

  &:hover {
    color: #007bff;
  }

  ${props =>
    props.$active &&
    `
    color: #007bff;
  `}
`;
export const Logo = styled.a`
  cursor: pointer;
`;