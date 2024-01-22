// Header.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
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
const Logo = styled.a`
  cursor: pointer;
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = to => {
    navigate(to);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={() => handleNavigate('/')}>
          Car Rental Service
        </Logo>
        <NavLink
          to="/"
          $active={location.pathname === '/'}
          onClick={() => handleNavigate('/')}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          $active={location.pathname === '/catalog'}
          onClick={() => handleNavigate('/catalog')}
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          $active={location.pathname === '/favorites'}
          onClick={() => handleNavigate('/favorites')}
        >
          Favorites
        </NavLink>
        <a href="tel:+380730000000">Contact us +380730000000</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
