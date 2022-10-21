import styled from 'styled-components/macro';
import { Button } from '@mui/material';

export const DefaultButton = styled(Button)`
  && {
    font-size: ${(p) => p.theme.fontSizes.m};
    color: ${(p) => (p.colorAlt ? p.theme.colors.accent : p.theme.colors.text)};
  }
`;

export const AltMIUButton = styled(DefaultButton)`
  && {
    text-transform: capitalize;
    background-color: greenyellow;
    color: ${(p) => p.theme.colors.text};
  }
`;
