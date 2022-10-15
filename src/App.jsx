import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box
        as='main'
        bg='white'>
        <Box
          as='p'
          bg={{ xs: 'blue', sm: 'tomato', md: 'green', lg: 'pink' }}
          fontSize={{ xs: 'xs', sm: 'm', md: 'l', lg: 'xl' }}
          textAlign='center'
          width='100%'
          p={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          m='50px auto'>
          It's alive!
        </Box>
      </Box>
    </>
  );
}

export { App };
