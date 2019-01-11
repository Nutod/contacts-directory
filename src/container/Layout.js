import React, { Component } from "react";
import { Box } from "grommet";
import styled from "styled-components";
// import { Button } from "./components/elements/Button/Button";
import Background from "../components/elements/Background/Background";
import Eclipse from "../assets/icons/eclipse-bg.svg";
import Contact from "../assets/icons/contacts.svg";
import Logo from "../components/elements/Logo/Logo";
import Navigation from "../components/elements/Navigation/Navigation";

const ToolBar = props => (
	<Box
		tag="header"
		direction="row"
		align="center"
		justify="between"
		pad={{ left: "medium", right: "small", vertical: "small" }}
		elevation="medium"
		style={{ zIndex: "1" }}
		{...props}
	/>
);

const Container = styled.div``;

export default class Layout extends Component {
	render() {
		return (
			<Container>
				<ToolBar>
					<Logo />
					<Navigation />
				</ToolBar>
				<Background />
				<img src={Eclipse} alt="bg" />
				<img src={Contact} alt="bg" style={{ width: "5rem" }} />
			</Container>
		);
	}
}
