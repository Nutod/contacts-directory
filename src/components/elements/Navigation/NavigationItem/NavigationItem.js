import React from "react";
import styled from "styled-components";
import theme from "../../Icons/Colors";

const ListItem = styled.li`
	list-style: none;
	margin-right: 2.5rem;
	padding: 1rem;
	cursor: pointer;
	transition: all 0.2s;
	font-size: 1.3rem;
	color: #aaaaaa;

	&:hover {
		color: ${theme.purple};
	}

	@media (max-width: 790px) {
		padding: 0;
	}
`;

// This component will implement links

export default function NavigationItem({ children }) {
	return <ListItem>{children}</ListItem>;
}
