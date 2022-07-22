import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font: 100%/1.75 'Merriweather','Georgia',serif;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }: any) => theme.colors.bg};
  color: ${({ theme }: any) => theme.colors.textNormal};
  font-family: 'Merriweather','Georgia',serif;
  font-weight: 400;
  word-wrap: break-word;
  font-kerning: normal;
}

h1, h3 {
  font-family: Montserrat,sans-serif
}

// theme buttons color
.light {
  background-color: ${theme.light.colors.themeBtnBg};
}
.dark {
  background-color: ${theme.dark.colors.themeBtnBg};
}

// active theme
.active{
    border: 1px solid ${({ theme }) => theme.colors.themeBtnBorder};
}

`;
