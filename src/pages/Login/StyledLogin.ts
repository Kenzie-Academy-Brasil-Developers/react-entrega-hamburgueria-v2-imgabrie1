import styled from "styled-components";

export const StyledLoginPage = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  & > div > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 31.25rem;

    & > div:nth-of-type(1) {
      display: none;

      @media (max-width: 56.25rem) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
