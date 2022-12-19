import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  body {
    font-family: "Inter", sans-serif;
  }

  :root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;

    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #e0e0e0;
    --color-gray-0: #f5f5f5;
    --color-white: #ffffff;
    --color-black: #000000;

    --font-size-1: 1.625rem;
    --font-size-2: 1.375rem;
    --font-size-3: 1.125rem;
    --font-size-4: 1rem;
    --font-size-5: 0.875rem;
    --font-size-6: 0.75rem;

    --radius-1: 0.5rem;
    --radius-2: 0.3125rem;
  }
`;
