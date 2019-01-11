import styled from "styled-components";
import theme from "../Icons/Colors";

export const Button = styled.button`
	all: unset;
	padding: 1rem 2rem;
	text-align: center;
	width: 10rem;
	color: #fff;
	background: linear-gradient(to right, ${theme.brand}, ${theme.purpleLight});
	border-radius: 3rem;
	cursor: pointer;
	box-shadow: 0 5px 10px ${theme.lightGreyOne};
	transition: all 0.2s;
	backface-visibility: hidden;

	&:hover {
		background: linear-gradient(to right, ${theme.purpleLight}, ${theme.brand});
		transform: translateY(-0.1rem);
		box-shadow: 0 10px 20px ${theme.lightGreyOne};
	}
`;
