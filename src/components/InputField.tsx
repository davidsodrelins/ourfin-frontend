import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';

interface InputFieldProps {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface LabelProps {
    $isFocused: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type, value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(e.target.value !== '');
    };

    return (
        <InputContainer>
            <Label $isFocused={isFocused || value !== ''}>{label}</Label>
            <Input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </InputContainer>
    );
};

export default InputField;

const InputContainer = styled.div`
  position: relative;
  margin: 10px;
`;

const Input = styled.input`
  padding: 8px;
  background-color: transparent;
  border: 1px solid ${theme.primaryBlue};
  border-radius: 4px;
  width: 100%;

  &:focus-visible {
    outline: ${theme.primaryBlue} auto 1px;
  }

  &:hover {
    outline: solid ${theme.primaryBlue} 1px;
  }
`;

const Label = styled.label<LabelProps>`
    border-radius: 2px;
    position: absolute;
    background: ${theme.white}; 
    top: ${({ $isFocused }) => $isFocused ? '-10px' : '5px'};
    z-index:  ${({ $isFocused }) => $isFocused ? '0' : '-1'};
    left: ${({ $isFocused }) => $isFocused ? '10px' : '5px'};
    padding: 0 4px;
    font-size: ${({ $isFocused }) => $isFocused ? '0.75rem' : '1rem'};
    color: ${theme.textPrimary};
    transition: top 0.3s ease-in-out, font-size 0.3s ease-in-out, opacity 0.3s ease-in-out, left 0.3s ease-in-out;
`;
