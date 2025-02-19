import { createGlobalStyle } from 'styled-components';

export const Page = createGlobalStyle`
  .page {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-overflow-style: scrollbar;
    -ms-text-size-adjust: 100%;
    min-width: 320px;
    min-height: 100%;
  }

  .page__inner {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .page__content {
    flex-grow: 1;
  }

  .page__footer-wrapper {
    flex-shrink: 0;
  }

`
