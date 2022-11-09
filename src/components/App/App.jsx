import { Box } from 'components/utils/Box';
import { GlobalStyle } from '../../theme/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box
        as='main'
        fontSize='2rem'
        mt='5rem'
        textAlign='center'
        bg='white'></Box>
    </>
  );
}

export { App };
