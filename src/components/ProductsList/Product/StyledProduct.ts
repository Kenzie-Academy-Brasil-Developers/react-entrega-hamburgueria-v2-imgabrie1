import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 18.75rem;
  height: 21.625rem;

  border-radius: ${({ theme }) => theme.border.radius2};
  border: 2px solid ${({ theme }) => theme.colors.gray0};

  transition: all 0.5s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray100};
  }

  & figure {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 44%;

    background-color: ${({ theme }) => theme.colors.gray0};

    overflow: hidden;
    object-fit: cover;
  }

  & figure img {
    object-fit: cover;
  }

  & div {
    width: 100%;
    height: 56%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1.5rem;
  }
`;
