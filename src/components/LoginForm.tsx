import React, { useState } from 'react';
import { Button, FormContainer, Link } from '../styles/GlobalStyles';
import InputField from './InputField';
import { useMessage } from '../contexts/MessageContext';
import authService from '../services/authService';
import Spinner from './Spinner';


interface LoginCredentials {
  email?: string;
  login?: string;
  password: string;
}


const LoginForm: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { showMessage } = useMessage();

  const performLogin = async (credentials: LoginCredentials) => {
    try {
      await authService.login(credentials, showMessage);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro ao fazer login.';
      showMessage(errorMessage, 'error');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailOrUsername || !password) {
      showMessage('Por favor, preencha todos os campos', 'alert');
      return;
    }
    setIsLoggingIn(true);
    const credentials = emailOrUsername.includes('@') ? { email: emailOrUsername, password } : { login: emailOrUsername, password };
    performLogin(credentials);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        name="emailOrUsername"
        type="text"
        value={emailOrUsername}
        onChange={(e) => setEmailOrUsername(e.target.value)}
        label="Email ou Usuário"
      />
      <InputField
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Senha"
      />
      <Button type="submit" disabled={isLoggingIn}>
        {isLoggingIn ? <><Spinner /> Logando...</> : 'Login'}
      </Button>
      <Link onClick={() => { /* Implementar lógica de esqueci minha senha */ }}>
        Esqueci minha senha
      </Link>
    </FormContainer>
  );
};

export default LoginForm;
