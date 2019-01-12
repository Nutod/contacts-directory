import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavContainer = styled.ul`
	display: flex;
	margin: 2rem 12rem 4rem 4rem;

	@media (max-width: 790px) {
		margin: 1rem 0 5rem 0;
	}
`;

export default function Navigation() {
	return (
		<NavContainer>
			<NavigationItem>Home</NavigationItem>
			<NavigationItem>About</NavigationItem>
			<NavigationItem>Pricing</NavigationItem>
			<NavigationItem>Contact Us</NavigationItem>
		</NavContainer>
	);
}
