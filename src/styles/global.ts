import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
	}

	body {
		margin: 0;
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
		height: 3em;
		outline: none;
		border-radius: 0.4em;
		background-color: #f0f0f0;
		border: 2px solid rgb(182, 182, 182);
		padding: 0 8px;
		margin: 0.4em 0;
		box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
	}

	label {
		height: auto;
		color: black;
		font-weight: bold;
	}

	button {
		width: auto;
		min-width: 150px;
		min-height: 30px;
		padding: 10px;
		text-transform: uppercase;
		border: none;
		border-radius: 0.2em;
		outline: none;
		cursor: pointer;
		background-color: rgb(41, 41, 41);
		color: white;
		font-weight: bold;
		font: inherit;
		transition: 0.2s background-color;
		&:hover {
				background-color: rgb(54, 54, 54);
				transition: 0.2s background-color;
		}
		&:disabled {
				background-color: rgb(211, 211, 211);
				cursor: default;
		}
	}

	a {
		color: inherit;
	}

	h1, h2, h3, h4, h5, h6 {
		display: inline-block;
		text-align: center;
	}

	h1 {
		font-size: 30pt;
		padding: 0 10px;
		margin: 0;
		margin-bottom: 20px;
		font-weight: bold;
		text-transform: uppercase;
	}


	::selection {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.secondary};
	}
`;

export default Global;
