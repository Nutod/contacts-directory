import React, { Component } from "react";
import styled from "styled-components";
import Background from "../../components/elements/Background/Background";
import Eclipse from "../../assets/icons/eclipse-bg.svg";
import Logo from "../../components/elements/Logo/Logo";
import Navigation from "../../components/elements/Navigation/Navigation";
import { Form } from "../../components/elements/Form/Form";
import { Button } from "../../components/elements/Button/Button";
import theme from "../../components/elements/Icons/Colors";
import { expiration } from "../../shared/expiration";

export const Container = styled.div`
	position: relative;
	height: 100vh;
`;

export const ToolBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 5;

	@media (max-width: 790px) {
		flex-direction: column;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 4;
	margin: 4rem 12rem;

	@media (max-width: 920px) {
		flex-direction: column-reverse;
		margin: 0rem 12rem;
	}
`;

export const CTAWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	@media (max-width: 920px) {
		order: 2;
		align-items: center;
		margin-top: 4rem;
		margin-bottom: 8rem;
	}
`;

export const Backdrop = styled.div`
	position: absolute;
	top: 0;
	z-index: -1;
	overflow: hidden;
	height: 100%;
	width: 100%;

	@media (max-width: 920px) {
		height: 140vh;
		overflow: hidden;
	}

	@media (max-width: 790px) {
		height: 160vh;
	}
`;

export const HeadingOne = styled.h1`
	font-size: 8rem;
	margin: 0rem 0;
	color: ${theme.purple};

	@media (max-width: 920px) {
		text-align: center;
		margin: 0;
	}

	@media (max-width: 615px) {
		font-size: 6rem;
	}

	@media (max-width: 515px) {
		font-size: 5rem;
	}
`;

export const CTAText = styled.p`
	width: 25rem;
	text-align: right;

	@media (max-width: 920px) {
		text-align: center;
	}

	@media (max-width: 615px) {
		font-size: 1.7rem;
	}

	@media (max-width: 515px) {
		font-size: 1.5rem;
	}
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

export const HR = styled.hr`
	width: 25rem;
	margin: 0;
	height: 1rem;
	border: none;
	border-radius: 1rem;
	background: ${theme.brand};

	@media (max-width: 615px) {
		width: 20rem;
		height: 0.5rem;
		margin: -1rem;
	}

	@media (max-width: 515px) {
		width: 15rem;
		height: 0.5rem;
	}
`;

export default class SignUp extends Component {
	state = {
		fullname: "",
		username: "",
		email: "",
		password: "",
		retypePassword: ""
	};

	signUpFormHandler = event => {
		event.preventDefault();

		// Accessing form data from state
		const formData = {};

		// Add values to localStorage
		localStorage.setItem("username", formData.username);
		localStorage.setItem("email", formData.email);

		// Set expiration value in localStorage
		localStorage.setItem("expiresIn", 36000);

		// Pass expiration value to the expiration function
		expiration(localStorage.getItem("expiresIn"));

		// Redirect after user is signed up
		this.props.history.push("/account");
	};

	changeHandler = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

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
							width: "140rem",
							position: "absolute",
							top: "0",
							left: "-50rem"
						}}
					/>
				</Backdrop>
				<Content>
					<Form>
						<label htmlFor="fullname">Fullname</label>
						<input
							type="text"
							name="fullname"
							required
							onChange={this.changeHandler}
						/>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							required
							onChange={this.changeHandler}
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							required
							onChange={this.changeHandler}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							required
							onChange={this.changeHandler}
						/>
						<input
							type="password"
							name="retypePassword"
							placeholder="Re-type Password"
							required
							onChange={this.changeHandler}
						/>
						{/* 

						 Add Placeholder style here 
						*/}
						<div style={{ textAlign: "center" }}>
							<TermsAndAgreementParagraph>
								By Signing Up, you agree to our
								<span style={{ color: `${theme.brand}` }}>
									Terms & Condition
								</span>{" "}
								and read our
								<span style={{ color: `${theme.brand}` }}> Privacy Policy</span>
							</TermsAndAgreementParagraph>
							<Button>Get Started</Button>
							<LoginParagraph>
								Already have an Account?{" "}
								<span style={{ color: `${theme.brand}` }}>Login</span>
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
}
