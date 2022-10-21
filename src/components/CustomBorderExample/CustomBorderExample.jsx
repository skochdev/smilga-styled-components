import styled from 'styled-components/macro';
import { setBorder } from '../utils/borders';

export const CustomBorderExample = () => {
  return (
    <Wrapper>
      <div className='bordered'>Hello</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .bordered {
    font-size: 2.6rem;
    border: ${setBorder({ width: 3, color: 'pink' })};
  }
`;
