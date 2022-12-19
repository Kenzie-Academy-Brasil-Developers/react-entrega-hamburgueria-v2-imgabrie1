import styled from "styled-components";

export const StyledToast = styled.div`
  width: 100%;
  max-width: 23.5625rem;

  padding: 1rem;

  border-radius: ${({ theme }) => theme.border.radius2};
  border: 1px solid ${({ theme }) => theme.colors.gray20};

  display: flex;
  gap: 1rem;

  & > figure {
    width: 7.5rem;
    height: 3.75rem;

    border-radius: ${({ theme }) => theme.border.radius1};

    background-color: ${({ theme }) => theme.colors.primary100};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > figure > svg {
    color: ${({ theme }) => theme.colors.primary};

    width: 40%;
    height: 40%;
  }
`;
