import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import styled from 'styled-components';

const Container = styled.header`
  max-width: 1440px;
`;

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
