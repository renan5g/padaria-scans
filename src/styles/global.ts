import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.heading};
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.heading};
    border-radius: 10px;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.heading};
  }
	
  ul, li, ol {
    list-style: none;
  }
`;
