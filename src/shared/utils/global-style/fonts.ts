import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'MyFont';
    src: url('/fonts/MyFont.woff2') format('woff2'),
         url('/fonts/MyFont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`
