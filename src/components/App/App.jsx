import { Box } from 'components/Box';
import { GlobalStyle } from '../utils/GlobalStyle';
import Card from '../Card/Card';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box
        as='main'
        bg='white'>
        <Box
          as='p'
          textAlign='center'
          width='100%'
          p={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          fontSize={{ sm: '1.4rem', md: '1.6rem', lg: '2rem' }}
          m='50px auto'>
          <Card
            name='accent chair'
            price='$180'
            productImage='https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160'
          />
          <Box
            as='p'
            mt={4}>
            Responsive card, that adjusts it's size and font size according to
            breakpoints from styled system.
          </Box>
        </Box>
      </Box>
    </>
  );
}

export { App };
