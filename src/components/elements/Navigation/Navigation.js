import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavContainer = styled.ul`
	display: flex;
	margin: 4rem;
`;

export default function Navigation() {
	return (
		<NavContainer>
			<NavigationItem />
			<NavigationItem />
			<NavigationItem />
		</NavContainer>
	);
}
