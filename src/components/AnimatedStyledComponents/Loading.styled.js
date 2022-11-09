import { RiLoader3Fill } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components/macro';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg); 
  }
`;

export const Loading = styled(RiLoader3Fill)`
  width: 6rem;
  height: 6rem;
  fill: tomato;
  animation: ${spinner} 1s cubic-bezier(0.1, 0.4, 0.9, 0.6) infinite;
`;
