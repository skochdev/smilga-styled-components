import styled from 'styled-components/macro';
import { Box } from '../Box';

const Card = ({ productImage, name, price }) => {
  return (
    <StyledCard>
      <Box
        width={{ xs: 300, sm: 600, lg: 800 }}
        m='0 auto;'
        as='article'>
        <img
          src={productImage}
          alt=''
        />
        <div className='product-details'>
          <Box
            as='h2'
            className='name'>
            {name}
          </Box>
          <Box
            fontSize={{ xs: '1.4rem', sm: '2rem', md: '2.4rem', lg: '3rem' }}
            as='span'
            className='price'>
            {price}
          </Box>
        </div>
      </Box>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  article {
    padding: 2rem;
    background-color: ${(p) => p.theme.colors.muted};
    border-radius: ${(p) => p.theme.radii.normal};
    img {
      width: 100%;
    }

    .product-details {
      color: ${(p) => p.theme.colors.text};
      padding-top: ${(p) => p.theme.space[1]}rem;
      padding-bottom: ${(p) => p.theme.space[1]}rem;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .name {
      text-transform: capitalize;
    }

    .price {
      font-weight: 700;
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;

export default Card;
