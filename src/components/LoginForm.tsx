// components/LoginForm.tsx
import React, { useState } from 'react';
import { Button, ErrorMessage, FormContainer, Input, Link } from '../styles/GlobalStyles';
import InputField from './InputField';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(' ');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(' ');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // TODO: Implement login logic
    console.log('Logging in with:', email, password);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email or Username"
        />
        <InputField
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Login</Button>

     <Link onClick={() => { /* Implement forgot password logic */ }}>
        Esqueci minha senha
      </Link>

      </FormContainer>

  
    </>
  );
};

export default LoginForm;

