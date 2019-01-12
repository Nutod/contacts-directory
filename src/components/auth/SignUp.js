import React, { Component } from "react";
import { Box } from "grommet";
import styled from "styled-components";
import Background from "../../components/elements/Background/Background";
import Eclipse from "../../assets/icons/eclipse-bg.svg";
import Logo from "../../components/elements/Logo/Logo";
import Navigation from "../../components/elements/Navigation/Navigation";
import { Form } from "../../components/elements/Form/Form";
import { Button } from "../../components/elements/Button/Button";
import theme from "../../components/elements/Icons/Colors";
import Input from "../elements/Input/Input";
import { checkValidity } from "../../shared/checkValidity";
import { expiration } from "../../shared/expiration";

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

// TODO: Convert to class component
export default class SignUp extends Component {
	state = {
		signUpForm: {
			fullname: {
				elementconfig: {
					type: "text",
					placeholder: "",
					required: "required"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			username: {
				elementconfig: {
					type: "text",
					placeholder: "",
					required: "required"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			email: {
				elementconfig: {
					type: "email",
					placeholder: "",
					required: "required"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementconfig: {
					type: "password",
					placeholder: "",
					required: "required"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			}
		},
		loading: false
	};

	signUpFormHandler = event => {
		event.preventDefault();
		this.setState({ loading: true });

		const formData = {};
		for (let formElementIdentifier in this.state.signUpForm) {
			formData[formElementIdentifier] = this.state.signUpForm[
				formElementIdentifier
			].value;
		}

		// Add values to localStorage
		localStorage.setItem("username", formData.username);
		localStorage.setItem("email", formData.email);
		localStorage.setItem("expiresIn", 36000);
		expiration(localStorage.getItem("expiresIn"));
		this.props.history.push("/account");
		console.log(formData);
	};

	inputChangeHandler = (event, inputIdentifier) => {
		const signUpForm = { ...this.state.signUpForm };
		const formElement = { ...signUpForm[inputIdentifier] };
		formElement.value = event.target.value;

		formElement.valid = checkValidity(
			formElement.value,
			formElement.validation
		);

		formElement.touched = true;
		signUpForm[inputIdentifier] = formElement;

		// Switched Logic
		// let formIsValid = true;
		// for (let inputIdentifiers in signUpForm) {
		// 	formIsValid = signUpForm[inputIdentifiers].valid && formIsValid;
		// }
		this.setState({ signUpForm });
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.signUpForm) {
			formElementsArray.push({
				id: key,
				config: this.state.signUpForm[key]
			});
		}

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
						onSubmit={this.signUpFormHandler}
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
						{formElementsArray.map(formElement => (
							<div key={formElement.id}>
								<label htmlFor={formElement.id}>{formElement.id}</label>
								<Input
									elementtype={formElement.config.elementtype}
									elementconfig={formElement.config.elementconfig}
									value={formElement.config.value}
									invalid={!formElement.config.valid}
									touched={formElement.config.touched}
									change={event =>
										this.inputChangeHandler(event, formElement.id)
									}
								/>
							</div>
						))}
						{/* <label htmlFor="fullname">Fullname</label>
						<Input type="text" />
						<label htmlFor="username">Username</label>
						<Input type="text" />
						<label htmlFor="email">Email</label>
						<Input type="email" />
						<label htmlFor="password">Password</label>
						<Input type="password" />

						 Add Placeholder style here 
						<Input type="password" placeholder="Re-type Password" /> */}
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
}
