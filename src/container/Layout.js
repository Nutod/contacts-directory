import React, { Component } from "react";
import { Box } from "grommet";
import styled from "styled-components";
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
		{...props}
		style={{ zIndex: 5 }}
	/>
);

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	z-index: -1;
	overflow: hidden;
	height: 100vh;
	width: 100vw;
`;

const Container = styled.div`
	position: relative;
	height: 100vh;
`;

export default class Layout extends Component {
	render() {
		return (
			<Container>
				<ToolBar>
					<Logo />
					<Navigation />
				</ToolBar>
				<Backdrop>
					<Background />
				</Backdrop>
				<Backdrop>
					<img
						src={Eclipse}
						alt="bg"
						style={{
							width: "120rem",
							position: "absolute",
							top: "0",
							left: "-30rem"
						}}
					/>
				</Backdrop>
				{/* <img src={Contact} alt="bg" style={{ width: "5rem" }} /> */}
			</Container>
		);
	}
}
