import styled from "styled-components";

export const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 56.25rem) {
    display: none;
  }
`;
