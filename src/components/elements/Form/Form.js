import styled from "styled-components";

// TODO: Refactor input declaration
export const Form = styled.form`
	& > * {
		display: block;
		font-family: inherit;
	}

	label {
		color: #ccc;
		font-size: 1rem;
	}

	input {
		border: none;
		border-bottom: 1px solid #eee;
		outline: none;
		background: transparent;
		font-size: 1.8rem;
		width: 26rem;
		margin-bottom: 1rem;
	}
`;
