import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
