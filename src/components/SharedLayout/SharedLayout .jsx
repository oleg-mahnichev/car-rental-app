import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import * as Styled from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Styled.Container>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Styled.Container>
  );
};

export default SharedLayout;
