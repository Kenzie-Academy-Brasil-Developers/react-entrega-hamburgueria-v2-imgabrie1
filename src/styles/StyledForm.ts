import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;

  & > fieldset {
    border: none;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    position: relative;
  }

  /* & > fieldset > label {
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size5};

    color: ${({ theme }) => theme.colors.gray50};

    position: absolute;
    top: 0;
    left: 1rem;

    transform: translateY(1.35rem);
    transition: 300ms;

    background-color: ${({ theme }) => theme.colors.white};

    padding: 0 0.3rem;
  } */

  /* input:focus + label {
    transform: translateY(-50%) scale(0.9);
  } */
/* 
  input:not(:placeholder-shown) + label {
    transform: translateY(-50%) scale(0.9);
  } */
`;
