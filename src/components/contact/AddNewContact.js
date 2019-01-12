import React, { Component } from "react";
import styled from "styled-components";
import Icons from "../elements/Icons/Icons";
import theme from "../elements/Icons/Colors";
import { Button } from "../elements/Button/Button";

// TODO: Refactor Component

const Container = styled.div`
	margin: 7.5rem auto;
	padding: 5rem;
	box-shadow: 0 0 40px ${theme.lightGreyOne};
	border-radius: 5px;
	width: 70rem;

	@media (max-width: 710px) {
		width: 50rem;
	}
`;

const AddNewForm = styled.form`
	& > * {
		display: inline-block;
		font-size: 1.2rem;
	}

	input {
		width: 30rem;
		margin-bottom: 3.5rem;
		border: none;
		border-bottom: 1px solid #eee;
		outline: none;
		background: transparent;
		font-size: 1.8rem;
		margin-bottom: 2.5rem;
	}

	input::placeholder {
		color: ${theme.lightGreyThree};
		font-size: 1rem;
	}

	@media (max-width: 710px) {
		input {
			width: 20rem;
		}
	}
`;

const AddressInput = styled.input`
	margin-left: 1rem;
	width: 52rem;
`;

export default class AddNewContact extends Component {
	render() {
		return (
			<Container>
				<Icons label="photo" />
				<AddNewForm onSubmit={event => event.preventDefault()}>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "2fr 1fr"
						}}
					>
						<div>
							<Icons label="user" />
							<input
								type="text"
								placeholder="Full Name"
								style={{ marginLeft: "1rem" }}
							/>
							<br />
							<Icons label="phone" />
							<input
								type="text"
								placeholder="Phone Number"
								style={{ marginLeft: "1rem" }}
							/>
							<br />
							<Icons label="mail" />
							<input
								type="email"
								placeholder="Email"
								style={{ marginLeft: "1rem" }}
							/>
							<br />
						</div>
						<div
							style={{
								width: "15rem",
								height: "10rem",
								background: `${theme.lightGreyOne}`,
								display: "flex",
								justifyContent: "center",
								marginTop: "1.5rem"
							}}
						>
							<Icons label="photo" />
							{/* <input type="file" placeholder="" style={{ marginLeft: "1rem" }} /> */}
						</div>
					</div>
					<div>
						<Icons label="location" />
						<AddressInput type="text" placeholder="Address" />
					</div>
					<div>
						<Icons label="suitcase" />
						<input
							type="text"
							placeholder="Work"
							style={{
								marginLeft: "1rem",
								marginRight: "5rem",
								width: "22rem"
							}}
						/>
					</div>
					<div>
						<Icons label="suitcase" />
						<input
							type="text"
							placeholder="Position"
							style={{ marginLeft: "1rem", width: "22rem" }}
						/>
					</div>
					<div
						style={{
							marginTop: "3rem",
							display: "flex",
							justifyContent: "space-between"
						}}
					>
						<p style={{ color: `${theme.lightGreyThree}` }}>Cancel</p>
						<Button>Save</Button>
					</div>
				</AddNewForm>
			</Container>
		);
	}
}
