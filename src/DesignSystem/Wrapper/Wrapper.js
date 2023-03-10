import styled from "styled-components";
export const Wrapper = styled.div`
  width: calc(100% - 2rem);
  margin: 0 auto;
  @media (min-width: 32em) {
    width: 90vw;
  }
  @media (min-width: 64em) {
    width: 70vw;
  }
`;
