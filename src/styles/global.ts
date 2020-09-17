import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
		transition: background-color 0.1s cubic-bezier(.88,1.11,.66,.29);
	}

	body {
		margin: 0;
		color: ${({ theme }) => theme.colors.dark};
		background-color: ${({ theme }) => theme.colors.light};
		font-family: "Quicksand", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
				"Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
				monospace;
	}

	input {
		font-family: inherit;
		height: 3em;
		outline: none;
		border-radius: 0.4em;
		background-color: ${({ theme }) => theme.colors.grey1};
		border: 2px solid rgb(182, 182, 182);
		padding: 0 8px;
		box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
		&:-webkit-autofill, :-webkit-autofill:focus, :-webkit-autofill:hover {
			-webkit-text-fill-color: ${({ theme }) => theme.colors.dark};
  		box-shadow: 0 0 0 2rem ${({ theme }) => theme.colors.grey1} inset;
		}
	}

	label {
		height: auto;
		font-weight: bold;
	}

	button {
		width: auto;
		padding: 10px;
		text-transform: uppercase;
		border: none;
		border-radius: 0.2em;
		outline: none;
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.grey4};
		color: ${({ theme }) => theme.colors.light};
		font-weight: 500;
		font-family: inherit;
		font-size: inherit;
		transition: 0.2s background-color;
		&:hover {
				background-color: ${({ theme }) => theme.colors.grey3};
				transition: 0.2s background-color;
		}
		&:disabled, &:disabled:hover {
				background-color: ${({ theme }) => theme.colors.grey1};
				cursor: default;
				color: ${({ theme }) => theme.colors.darkOpacity};
		}
	}

	a {
		color: inherit;
		&:hover {
			color: inherit;
		}
	}

	p {
		text-align: center;
		color: inherit;
	}

	h1, h2, h3, h4, h5, h6 {
		text-align: center;
		color: inherit;
	}

	h1 {
		font-size: 30pt;
		margin: 0;
		text-transform: uppercase;
		font-weight: lighter;
	}


	::selection {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.light};
	}
`;

export default Global;
