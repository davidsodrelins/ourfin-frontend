// components/LoginPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';
import CarouselContainer from './CarouselContainer';
import AuthContainer from './AuthContainer';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  color: ${theme.darkGrey};
`;

const LoginPage = () => {
  return (
    <PageContainer>
      <CarouselContainer />
      <AuthContainer />
    </PageContainer>
  );
};

export default LoginPage;
