import React, { Component } from "react";
import { Box } from "grommet";
import styled from "styled-components";
import Background from "../components/elements/Background/Background";
import Eclipse from "../assets/icons/eclipse-bg.svg";
import Logo from "../components/elements/Logo/Logo";
import Navigation from "../components/elements/Navigation/Navigation";
import { Form } from "../components/elements/Form/Form";
import { Button } from "../components/elements/Button/Button";
import SignUp from "../components/auth/SignUp";

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

const Content = props => (
	<Box
		tag="content"
		direction="row"
		align="center"
		justify="between"
		pad={{ left: "medium", right: "small", vertical: "small" }}
		{...props}
		style={{ zIndex: 4, margin: "0rem 12rem" }}
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

const HeadingOne = styled.h1`
	font-size: 8rem;
	margin: 4rem 0;
`;

const TermsAndAgreementParagraph = styled.p`
	font-size: 1rem;
	line-height: 1.5;
	margin-bottom: 2rem;
`;

const LoginParagraph = styled.p`
	font-size: 1rem;
	color: #bbb;
`;

export default class Layout extends Component {
	render() {
		return (
			<Container>
				<SignUp />
			</Container>
		);
	}
}
