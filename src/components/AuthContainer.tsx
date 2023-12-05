// components/AuthContainer.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Container = styled.div`
  width: 30%;
  background: ${theme.lightGrey};
`;

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      {isLogin ? (
        <>
          <LoginForm />
          <Button onClick={() => setIsLogin(false)}>Não tem cadastro? Cadastre-se</Button>
        </>
      ) : (
        <>
          <RegisterForm />
          <Button onClick={() => setIsLogin(true)}>Já tem uma conta? Faça login</Button>
        </>
      )}
    </Container>
  );
};

export default AuthContainer;

const Button = styled.button`
  background: ${theme.secondaryGreen};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${theme.accentOrange};
  }

  `;
