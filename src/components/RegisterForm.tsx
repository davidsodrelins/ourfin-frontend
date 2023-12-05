// RegisterForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormContainer, Input, ErrorMessage, Button } from '../styles/GlobalStyles';
import InputField from './InputField';


// Helper function to validate email
const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Helper function to validate password
const validatePassword = (password: string) => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(String(password));
};

// RegisterForm component
const RegisterForm: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    cpf: '',
  });
  const [error, setError] = useState(' ');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation logic here
    if (!userDetails.email || !userDetails.password || !userDetails.confirmPassword ||
        !userDetails.fullName || !userDetails.cpf) {
      setError('Please fill out all fields.');
      return;
    }
    if (!validateEmail(userDetails.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePassword(userDetails.password)) {
      setError('Password must have at least 8 characters, one letter, one number, and one special character.');
      return;
    }
    if (userDetails.password !== userDetails.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Add logic to handle user registration here
    console.log('User details:', userDetails);
    setError(' ');
    // You might want to redirect the user to the login page after successful registration
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        name="fullName"
        type="text"
        label="Full Name"
        value={userDetails.fullName}
        onChange={handleInputChange}
      />
      <InputField
        name="cpf"
        type="text"
        label="CPF"
        value={userDetails.cpf}
        onChange={handleInputChange}
      />
      <InputField
        name="email"
        type="email"
        label="Email"
        value={userDetails.email}
        onChange={handleInputChange}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        value={userDetails.password}
        onChange={handleInputChange}
      />
      <InputField
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        value={userDetails.confirmPassword}
        onChange={handleInputChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit">Register</Button>
    </FormContainer>
  );
};

export default RegisterForm;

