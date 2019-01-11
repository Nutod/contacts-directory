import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
	list-style: none;
	margin-right: 2rem;
	padding: 1rem;
	cursor: pointer;

	&:hover {
		color: crimson;
	}
`;

// This component will implement links

export default function NavigationItem() {
	return <ListItem>Navigation Item</ListItem>;
}
