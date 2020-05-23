import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap');
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Sen', sans-serif;
    transition: all 0.25s linear;
  }
  .a{
    color: ${({ theme }) => theme.text};

  }
  `;
