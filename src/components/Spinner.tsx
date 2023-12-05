// components/Spinner.tsx
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  border: 3px solid rgba(92, 177, 109, 0.8);  
  border-top: 3px solid rgba(43, 89, 195, 0.8);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
  align-self: center;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Spinner = () => {
  return <SpinnerContainer />;
};

export default Spinner;
