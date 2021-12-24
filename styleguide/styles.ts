import { createGlobalStyle } from "styled-components";
import { typography } from './utilities';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%;
	}
	body {
		line-height: 1;
	}
  html {
    font-family: ${typography.primaryFont};
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;
    font-size: ${typography.size.base};
    background-repeat: no-repeat;
    overflow: hidden;
    max-width: 650px;
    position: relative;
    margin: 0 auto;
  }
  h2 {
    font-weight: ${typography.weight.semibold};
    font-size: ${typography.size.large};
  }
  input, button {
    font-size: ${typography.size.base};
  }
  a {
    text-decoration: none;
  }
  strong {
    font-weight: bold;
  }
  code, kbd, pre, samp {
    font-family: monospace;
    background: #e6e6e6;
    padding: .1em .2em;
    margin: 0.1em;
    padding: .25ex .75ch;
  }

	/**
	*  Fonts goes here
	*/

	/* latin */
	@font-face {
		font-family: "Dosis";
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url("/fonts/Dosis-Regular.ttf") format("woff2");
	}

	/* latin */
	@font-face {
		font-family: "Dosis";
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url("/fonts/Dosis-Medium.ttf") format("woff2");
	}

	/* latin */
	@font-face {
		font-family: "Dosis";
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: url("/fonts/Dosis-SemiBold.ttf") format("woff2");
	}

	/* latin */
	@font-face {
		font-family: "Dosis";
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url("/fonts/Dosis-Bold.ttf") format("woff2");
	}
`;

export default GlobalStyle;
