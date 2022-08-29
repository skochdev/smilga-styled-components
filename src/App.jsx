import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box as="main" bg="white">
        template's working
      </Box>
    </>
  );
}

export { App };
