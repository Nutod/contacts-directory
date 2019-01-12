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

export const Container = styled.div`
	position: relative;
	height: 100vh;
`;

export const ToolBar = props => (
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

export const Content = props => (
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

export const Backdrop = styled.div`
	position: absolute;
	top: 0;
	z-index: -1;
	overflow: hidden;
	height: 100vh;
	width: 100vw;
`;

export const HeadingOne = styled.h1`
	font-size: 8rem;
	margin: 4rem 0;
	color: ${theme.purple};
`;

export const TermsAndAgreementParagraph = styled.p`
	font-size: 1rem;
	line-height: 1.5;
	margin-bottom: 2rem;
`;

export const LoginParagraph = styled.p`
	font-size: 1rem;
	color: #bbb;
`;

export const BrandText = styled.span`
	color: ${theme.brand};
`;

export default function SignUp() {
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
						boxShadow: "0px -2px 20px #ddd",
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
						All your contacts from all your accounts{" "}
						<BrandText>In One Place</BrandText>
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
		</Container>
	);
}
