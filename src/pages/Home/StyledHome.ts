import styled from "styled-components";

export const StyledHome = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 56.25rem) {
    & > div {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
  }
`;
