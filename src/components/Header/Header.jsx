// Header.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './Header.styled';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = to => {
    navigate(to);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.Nav>
        <Styled.Logo to="/" onClick={() => handleNavigate('/')}>
          Car Rental Service
        </Styled.Logo>
        <Styled.NavLink
          to="/"
          $active={location.pathname === '/'}
          onClick={() => handleNavigate('/')}
        >
          Home
        </Styled.NavLink>
        <Styled.NavLink
          to="/catalog"
          $active={location.pathname === '/catalog'}
          onClick={() => handleNavigate('/catalog')}
        >
          Catalog
        </Styled.NavLink>
        <Styled.NavLink
          to="/favorites"
          $active={location.pathname === '/favorites'}
          onClick={() => handleNavigate('/favorites')}
        >
          Favorites
        </Styled.NavLink>
        <a href="tel:+380730000000">Contact us +380730000000</a>
      </Styled.Nav>
    </Styled.HeaderContainer>
  );
};

export default Header;
