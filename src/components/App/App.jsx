import { Box } from 'components/utils/Box';
import { GlobalStyle } from '../../theme/GlobalStyle';
import Card from '../Card/Card';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box
        as='main'
        mt='5rem'
        textAlign='center'
        bg='white'>
        <Card
          name='accent chair'
          price='$180'
          productImage='https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160'
        />
        <Box
          as='p'
          margin='1rem auto'
          fontSize={{ xs: '1.4rem', lg: '1.8rem' }}>
          Responsive card.
        </Box>
      </Box>
    </>
  );
}

export { App };
