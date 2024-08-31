// Пути страниц

export enum Path {
  Main = '/',
  NotFound = '*'
}

// Базовые цвета https://colorscheme.ru/color-converter.html

export const black = 'hsl(0, 0%, 0%)';
export const grayDarkest = 'hsl(0, 0%, 10%)';
export const white = 'hsl(0, 0%, 100%)';

// Семантические цвета

export const colorMain = 'hsl(208, 98%, 43%)';
export const colorSuccess = 'hsl(120, 39%, 54%)';
export const colorDanger = '#ee4956';
export const colorWarning = 'hsl(35, 84%, 62%)';

export const textColor = grayDarkest;

// Базовая типографика
export const fontFamily = "'Montserrat', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
export const fontFamilyMonospace = 'SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace';

// Ширины

export enum Screen {
  sm = '480px',
  md = '768px',
  lg = '1024px',
  xl = '1200px'
}

export const gridColumns = 12;
export const gridGutterWidth = '30px';

// Разное

export const time = '0.3s';
export const shadow = '0 4px 2px -2px rgba(0, 0, 0, 0.3)';
export const opacity = '0.7';
