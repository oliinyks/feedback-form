import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 @font-face {
	font-family: ApercuArabicPro;
	src: url('../../fonts/ApercuArabicPro-Regular.ttf');
  }
  
  body {
    margin: 0;
    font-family: ApercuArabicPro, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	 background-color: #fff;
	 color: rgba(62, 62, 62, 1);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
	 color: rgba(255, 255, 255, 1);
  }
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
