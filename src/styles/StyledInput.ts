import styled from "styled-components";
import { Input } from "./components/Input";

export const StyledInput = styled(Input)`
  height: 3.75rem;
  width: 100%;

  border-radius: ${({ theme }) => theme.border.radius1};
  border: 1px solid ${({ theme }) => theme.colors.gray20};

  padding: 0 0.625rem 0 1.25rem;

  color: ${({ theme }) => theme.colors.gray50};

  font-size: ${({ theme }) => theme.font.size4};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray20};
    font-size: ${({ theme }) => theme.font.size4};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray100};
  }

  &:focus::placeholder {
    ${({ theme }) => theme.colors.gray50};
  }
`;
