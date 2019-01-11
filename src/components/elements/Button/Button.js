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
`;
