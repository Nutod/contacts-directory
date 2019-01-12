import styled from "styled-components";

// TODO: Refactor input declaration
export const Form = styled.form`
	background: #fff;
	width: 25vw;
	padding: 4rem 4rem 3rem 4rem;
	border-radius: 2.5rem;
	box-shadow: 0px -2px 20px #ddd;
	margin-left: 5rem;
	margin-top: -5rem;

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
		width: 18vw;
		margin-bottom: 1rem;

		@media (max-width: 920px) {
			width: 22rem;
		}
	}

	@media (max-width: 920px) {
		width: 30rem;
		margin-left: 0;
	}
`;
