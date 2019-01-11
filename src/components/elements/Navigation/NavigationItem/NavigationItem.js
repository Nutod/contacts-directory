import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
	list-style: none;
	margin-right: 2.5rem;
	padding: 1rem;
	cursor: pointer;
	transition: all 0.2s;
	font-size: 1.3rem;
	color: #aaaaaa;

	&:hover {
		color: crimson;
	}
`;

// This component will implement links

export default function NavigationItem({ children }) {
	return <ListItem>{children}</ListItem>;
}
