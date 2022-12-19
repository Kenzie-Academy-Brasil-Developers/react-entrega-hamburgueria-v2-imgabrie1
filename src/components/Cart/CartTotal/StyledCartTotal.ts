import styled from "styled-components";

export const StyledCartTotal = styled.div`
  height: 8.75rem;

  padding: 1.25rem 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.gray0};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
