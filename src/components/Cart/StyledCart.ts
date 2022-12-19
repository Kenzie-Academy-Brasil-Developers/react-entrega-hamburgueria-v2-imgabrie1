import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: ${({ theme }) => theme.colors.opacity};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
`;

export const StyledCart = styled.div`
  width: 100%;
  max-width: 30rem;

  border-radius: ${({ theme }) => theme.border.radius2};

  overflow: hidden;
`;

export const CartTitle = styled.div`
  height: 4.0625rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1.5rem;

  background-color: ${({ theme }) => theme.colors.primary};

  position: relative;

  & > button {
    position: absolute;
    right: 1rem;

    width: 1.75rem;
    height: 1.75rem;

    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.opacity};
    }
  }
`;

export const EmptyCart = styled.div`
  height: 9.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors.gray0};
`;

export const CartProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-height: 20.1875rem;

  overflow-y: auto;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray20};

  padding: 1.25rem 0.625rem;

  background-color: ${({ theme }) => theme.colors.gray0};
`;
