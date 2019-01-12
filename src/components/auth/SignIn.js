import React from "react";
import Background from "../../components/elements/Background/Background";
import Eclipse from "../../assets/icons/eclipse-bg.svg";
import Logo from "../../components/elements/Logo/Logo";
import Navigation from "../../components/elements/Navigation/Navigation";
import { Form } from "../../components/elements/Form/Form";
import { Button } from "../../components/elements/Button/Button";
import theme from "../../components/elements/Icons/Colors";
import {
	Container,
	HeadingOne,
	ToolBar,
	Content,
	Backdrop,
	TermsAndAgreementParagraph,
	LoginParagraph,
	BrandText,
	HR,
	CTAText,
	CTAWrapper
} from "./SignUp";

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
				<Form onSubmit={event => event.preventDefault()}>
					<label htmlFor="email">Email</label>
					<input type="email" />
					<label htmlFor="password">Password</label>
					<input type="password" />

					<div style={{ textAlign: "center" }}>
						<TermsAndAgreementParagraph>
							Forgot your Password?{" "}
							<span style={{ color: `${theme.brand}` }}>Reset it here</span>
						</TermsAndAgreementParagraph>
						<Button>Login</Button>
						<LoginParagraph>
							Don't have an accout?{" "}
							<span style={{ color: `${theme.brand}` }}>Get Started</span>
						</LoginParagraph>
					</div>
				</Form>
				<CTAWrapper>
					<HeadingOne>Be More.</HeadingOne>
					<CTAText>
						All your contacts from all your accounts{" "}
						<BrandText>In One Place</BrandText>
					</CTAText>
					<HR />
				</CTAWrapper>
			</Content>
		</Container>
	);
}
