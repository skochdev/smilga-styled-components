import styled from 'styled-components/macro';

const AltComplexTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className='underline'></div>
    </div>
  );
};
// Another syntax, but original Wrapper is more comfortable
const StyledAltComplexTitle = styled(AltComplexTitle)`
  h1 {
    color: mediumpurple;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 1rem;
  }

  .underline {
    width: 15rem;
    height: 2px;
    background-color: ${(p) => p.theme.colors.primary};
    margin: 0 auto;
  }
`;

export default StyledAltComplexTitle;
