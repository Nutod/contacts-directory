import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import Background from "../../components/elements/Background/Background";
import Eclipse from "../../assets/icons/eclipse-bg.svg";
import Logo from "../../components/elements/Logo/Logo";
import Navigation from "../../components/elements/Navigation/Navigation";
import { Form } from "../../components/elements/Form/Form";
import { Button } from "../../components/elements/Button/Button";
import theme from "../../components/elements/Icons/Colors";

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

export default function SignUp() {
	return (
		<>
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
						width: "140rem",
						position: "absolute",
						top: "0",
						left: "-50rem"
					}}
				/>
			</Backdrop>
			<Content>
				<Form
					onSubmit={event => event.preventDefault()}
					style={{
						background: "#fff",
						width: "25vw",
						padding: "4rem 4rem 3rem 4rem",
						borderRadius: "2.5rem",
						boxShadow: "0px 0px 40px #ddd",
						marginLeft: "5rem",
						marginTop: "-5rem"
					}}
				>
					<label htmlFor="fullname">Fullname</label>
					<input type="text" />
					<label htmlFor="username">Username</label>
					<input type="text" />
					<label htmlFor="email">Email</label>
					<input type="email" />
					<label htmlFor="password">Password</label>
					<input type="password" />

					{/* Add Placeholder style here */}
					<input type="password" placeholder="Re-type Password" />
					<div style={{ textAlign: "center" }}>
						<TermsAndAgreementParagraph>
							By Signing Up, you agree to our
							<span style={{ color: `${theme.brand}` }}>
								Terms & Condition
							</span>{" "}
							and read our
							<span style={{ color: `${theme.brand}` }}>Privacy Policy</span>
						</TermsAndAgreementParagraph>
						<Button>Get Started</Button>
						<LoginParagraph>
							Already have an Account?{" "}
							<span style={{ color: `${theme.brand}` }}>Login</span>
						</LoginParagraph>
					</div>
				</Form>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-end"
					}}
				>
					<HeadingOne>Be More.</HeadingOne>
					<p style={{ width: "25rem", textAlign: "right" }}>
						All your contacts from all your accounts In One Place
					</p>
					<hr
						style={{
							width: "25rem",
							margin: "0",
							height: "1rem",
							border: "none",
							borderRadius: "1rem",
							background: theme.brand
						}}
					/>
				</div>
			</Content>
		</>
	);
}
