import React, { Component } from "react";
import styled from "styled-components";
// import Logo from "./components/elements/Logo/Logo";
// import Navigation from "./components/elements/Navigation/Navigation";
// import { Button } from "./components/elements/Button/Button";
import Background from "../components/elements/Background/Background";
import Eclipse from "../assets/icons/eclipse-bg.svg";
import Contact from "../assets/icons/contacts.svg";

const Container = styled.div``;

export default class Layout extends Component {
	render() {
		return (
			<Container>
				{/* <h1>Application Sample</h1>
				<p>Paragraph text</p>
				<Logo />
				<Navigation />
				<Button>Get Started</Button> */}
				<Background />
				<img src={Eclipse} alt="bg" />
				<img src={Contact} alt="bg" style={{ width: "5rem" }} />
			</Container>
		);
	}
}
