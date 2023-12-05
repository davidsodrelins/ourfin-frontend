// components/BarMessage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { theme } from '../styles/GlobalStyles';

interface BarMessageProps {
  message: string;
  type?: 'info' | 'alert' | 'error' | 'default';
  time?: number;
  color?: string;
  background?: string;
}

const BarMessage: React.FC<BarMessageProps> = ({ message, type = 'default', time = 5000, color = 'white', background }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('fade-in');

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setAnimationClass('fade-out');
    }, time - 500); 
    
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, time);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, [time]);

  if (!isVisible) return null;

  const backgroundColor = background || (type === 'info' ? theme.primaryBlue : type === 'alert' ? 'darkorange' : type === 'error' ? 'red' : theme.primaryGreen);

  return (
    <MessageBar className={animationClass} color={color} background={backgroundColor}>
      {message}
      <CloseIcon onClick={() => setIsVisible(false)} />
    </MessageBar>
  );
};
const MessageBar = styled.div<{ color: string; background: string }>`
  width: 100%;
  min-height: 40px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;

  &.fade-in {
    animation: fadeIn 0.5s forwards;
  }

  &.fade-out {
    animation: fadeOut 0.5s forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const CloseIcon = styled(FaTimes)`
  cursor: pointer;
`;

export default BarMessage;
