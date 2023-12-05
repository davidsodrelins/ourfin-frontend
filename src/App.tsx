import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; 
import RegisterForm from './components/RegisterForm'; 
import CarouselContainer from './components/CarouselContainer';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from './assets/images/logo/login.png'; // Substitua pelo caminho correto do logo
import { Button, ButtonSecondary, theme } from './styles/GlobalStyles';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AppContainer>
      <CarouselSection>
        <CarouselContainer />
      </CarouselSection>
      <AuthSection>
        <Logo src={logo} alt="OurFin Logo" />
        <WelcomeText>Welcome to OurFin</WelcomeText>
        {isLogin ? (
          <>
            <LoginForm />
            <ButtonSecondary onClick={() => setIsLogin(false)}>
              Ainda não tem cadastro?
            </ButtonSecondary>
          </>
        ) : (
          <>
            <RegisterForm />
            <ButtonSecondary onClick={() => setIsLogin(true)}>
              Já tem uma conta? Faça login
            </ButtonSecondary>
          </>
        )}
      </AuthSection>
    </AppContainer>
  );
};

// Styled components para o layout da aplicação
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CarouselSection = styled.div`
  flex: 80%;
  @media (max-width: 768px) {
    flex: none;
    order: 2;
  }
`;

const AuthSection = styled.div`
  flex: 20%;
  padding: 20px;
  text-align: center;
  align-self: center;

  @media (max-width: 768px) {
    flex: none;
    order: 1;
  }
`;




const Logo = styled.img`
  max-width: 100%;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 3%;
`;

const WelcomeText = styled.h2`
  color: ${theme.textPrimary};
  margin-bottom: 20px;
`;

export default App;
