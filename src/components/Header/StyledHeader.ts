import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 5rem;

  background-color: ${({ theme }) => theme.colors.gray0};
  
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > div > div > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 56.25rem) {
    & > div {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }

    & > div > div {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

export const ButtonHeader = styled.button`
  background-color: transparent;
  border: none;

  height: 3.75rem;
  width: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.border.radius1};

  cursor: pointer;

  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray20};
  }

  & > svg {
    height: 50%;
    width: 50%;
  }

  & > span {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;

    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0.1rem 0.3rem;

    border-radius: ${({ theme }) => theme.border.radius2};

    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.font.size6};
    font-weight: 300;
  }
`;
