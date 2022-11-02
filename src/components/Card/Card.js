import styled from 'styled-components/macro';

const Card = ({ productImage, name, price }) => {
  return (
    <StyledCard>
      <img
        src={productImage}
        alt=''
      />
      <div className='product-details'>
        <h2 className='name'>{name}</h2>
        <span className='price'>{price}</span>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  margin: 0 auto;
  width: 90vw;
  max-width: 300px;
  padding: 2rem;
  background-color: ${(p) => p.theme.colors.muted};
  border-radius: ${(p) => p.theme.radii.normal};
  transition: box-shadow 150ms ease-in;

  a {
    text-decoration: none;
    outline: none;
  }

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
    outline: none;
  }

  .name {
    text-transform: capitalize;
  }

  .price {
    font-weight: 700;
    font-size: 1.6rem;
    color: ${(p) => p.theme.colors.primary};
  }

  @media (min-width: 480px) {
    max-width: 450px;
  }

  @media (min-width: 768px) {
    max-width: 600px;

    .name {
      font-size: 2rem;
    }

    .price {
      font-size: 3rem;
    }
  }

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 4px 2px 12px 2px ${(p) => p.theme.colors.boxShadow};
  }

  @media (min-width: 1200px) {
    max-width: 700px;

    .name {
      font-size: 3rem;
    }

    .price {
      font-size: 4rem;
    }
  }
`;

export default Card;
