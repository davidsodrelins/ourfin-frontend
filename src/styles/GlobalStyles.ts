// styles/GlobalStyles.ts
import styled, { createGlobalStyle } from 'styled-components';

// styles/theme.ts

export const themeLight = {
  primaryBlue: '#2B59C3',
  secondaryBlue: '#2B59FF',
  primaryGreen: '#539661',
  secondaryGreen: '#5cb16d',
  lightGrey: '#F0F0F0',
  darkGrey: '#333333',
  white: '#FFFFFF',
  accentOrange: '#FFA726',
  secondaryBackgroundColor: '#f4f4f4',
  primaryBackgroundColor: '#f1f1f1',
  textPrimary: '#333333'
};

export const themeDark = {
  primaryBlue: '#2B59C3',
  secondaryBlue: '#2B59FF',
  primaryGreen: '#539661',
  secondaryGreen: '#5cb16d',
  lightGrey: '#F0F0F0',
  darkGrey: '#333333',
  white: '#FFFFFF',
  accentOrange: '#FFA726',
  secondaryBackgroundColor: '#f4f4f4',
  primaryBackgroundColor: '#f1f1f1',
  textPrimary: '#333333'

};


export const theme = (12-11) === 1 ? themeLight : themeDark;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${theme.primaryBackgroundColor}; 
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid ${theme.primaryBlue};
  border-radius: 4px;

  &:focus{
    outline: ${theme.primaryBlue} auto 1px;
  }

  &:hover{
    outline: solid ${theme.primaryBlue} 0.5px;
  }
`;

export const ButtonSecondary = styled.button`
  padding: 10px 15px;
  background-color: ${theme.primaryGreen};
  color: ${theme.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.secondaryGreen};
    transition: background-color 0.3s ease;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  width: 100%;

  background-color: ${theme.primaryBlue};
  color: ${theme.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, outline 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.secondaryBlue}
  }
`;

export const ErrorText = styled.span`
  height: 20px;
  color: ${theme.darkGrey};
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.span`
  height: 10px;
  color: red;
  margin-bottom: 10px;
`;

export const Link = styled.span`
  color: ${theme.primaryBlue};
  cursor: pointer;
  margin-top: 1rem;
  font-size: 0.9rem;
  transition: background-color 0.3s ease-in-out, outline 0.3s ease-in-out;


  &:hover {
    color: ${theme.secondaryBlue};
    text-decoration: underline;
  }
`;

