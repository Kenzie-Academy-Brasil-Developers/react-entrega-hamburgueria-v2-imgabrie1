import styled from "styled-components";

export const StyledProductsList = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  & h2 {
    align-self: flex-start;
  }

  & > ul {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18.75rem, auto));
    grid-gap: 1rem;
  }

  @media (max-width: 56.25rem) {
    width: 100%;
    max-width: 40.625rem;

    & > ul {
      display: flex;
      align-items: center;
      overflow-x: auto;
    }
  }
`;
