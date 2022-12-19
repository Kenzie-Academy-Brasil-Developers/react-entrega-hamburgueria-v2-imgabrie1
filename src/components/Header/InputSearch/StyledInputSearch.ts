import styled from "styled-components";

export const StyledFormSearch = styled.form`
  position: relative;

  display: flex;
  align-items: center;

  max-width: 22.8125rem;
  width: 100%;

  & > button {
    width: 3rem;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.gray0};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray20};
    }
  }

  & > button > svg {
    width: 45%;
    height: 45%;
    width: fit-content;

    color: ${({ theme }) => theme.colors.gray50};
  }
`;
