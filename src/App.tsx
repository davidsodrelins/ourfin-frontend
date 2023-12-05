import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CarouselContainer from './components/CarouselContainer';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from './assets/images/logo/login.png'; // Substitua pelo caminho correto do logo
import { ButtonSecondary, theme } from './styles/GlobalStyles';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MessageProvider } from './contexts/MessageContext';


const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <MessageProvider>
      <AppContainer>
        <CarouselSection>
          <CarouselContainer />
        </CarouselSection>
        <AuthSection>
          <Logo src={logo} alt="OurFin Logo" />
          <WelcomeText>OurFin</WelcomeText>
          {isLogin ? (
            <>
              <LoginForm />
              <ButtonSecondary onClick={() => setIsLogin(false)}>
                Ainda não tem cadastro?
              </ButtonSecondary>
              <Footer>
                <SocialMediaIcons>
                  <a href="https://www.instagram.com"><FaInstagram color={theme.primaryBlue} /></a>
                  <a href="https://www.facebook.com"><FaFacebook color={theme.primaryBlue} /></a>
                  <a href="https://www.whatsapp.com"><FaWhatsapp color={theme.primaryBlue} /></a>
                </SocialMediaIcons>
                <CopyrightText>© 2023 OurFin</CopyrightText>
              </Footer>
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
    </MessageProvider>
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
  padding: 10px;
  text-align: center;
  align-self: normal;

  @media (max-width: 768px) {
    flex: none;
    order: 1;
  }
`;

const Logo = styled.img`
  width: 100px;
  border-radius: 3%;
`;

const WelcomeText = styled.h2`
  color: ${theme.textPrimary};
  margin-bottom: 5px;
`;

const Footer = styled.footer`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  color: ${theme.textPrimary};
  width: 100%;
`;

const SocialMediaIcons = styled.div`
  font-size: 20px;

  a {
    color: ${theme.textPrimary};
    margin: 0 10px;
  }
`;

const CopyrightText = styled.span`
  font-size: 10px;
  font-weight: 600;
`;


export default App;
