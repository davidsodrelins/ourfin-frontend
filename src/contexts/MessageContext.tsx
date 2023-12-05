// src/contexts/MessageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import BarMessage from '../components/BarMessage';

interface MessageContextProps {
  showMessage: (message: string, type?: 'info' | 'alert' | 'error' | 'default' | 'default', time?: number, color?: string, background?: string) => void;
}

const MessageContext = createContext<MessageContextProps>({ showMessage: () => { } });

export const useMessage = () => useContext(MessageContext);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'info' | 'alert' | 'error' | 'default'>('info');
  const [messageTime, setMessageTime] = useState(5000);
  const [messageColor, setMessageColor] = useState('white');
  const [messageBackground, setMessageBackground] = useState('');

  const showMessage = (msg: string, type: 'info' | 'alert' | 'error' | 'default' = 'default', time = 5000, color = 'white', background = '') => {
    setMessage('');
    setMessageType(type);
    setMessageTime(time);
    setMessageColor(color);
    setMessageBackground(background);
    setTimeout(() => setMessage(msg), 0);

  };

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      {message && (
        <BarMessage
          message={message}
          type={messageType}
          time={messageTime}
          color={messageColor}
          background={messageBackground}
        />
      )}
    </MessageContext.Provider>
  );
};
