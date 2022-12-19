import styled from "styled-components";

export const StyledModelRegister = styled.div`
  width: 100%;
  max-width: 31.25rem;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray0};
  border-radius: ${({ theme }) => theme.border.radius2};

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input::placeholder {
    color: #c3c6ca;
  }
`;
