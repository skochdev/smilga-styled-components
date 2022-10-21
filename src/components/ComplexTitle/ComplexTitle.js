import styled from 'styled-components/macro';

export const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  );
};

// You can create simple classes inside this wrapper,
// and they won't collide with other same named classes from other component's wrappers
const Wrapper = styled.div`
  h1 {
    color: var(
      --default-bgc
    ); // global css variables are also work, but no autocompletion
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 1rem;
  }

  .underline {
    width: 15rem;
    height: 2px;
    background-color: ${(p) => p.theme.colors.accent};
    margin: 0 auto;
  }
`;
