import React, { Component } from "react";
import styled from "styled-components";
import Icons from "../elements/Icons/Icons";
import theme from "../elements/Icons/Colors";

const Container = styled.div`
	margin: 10rem auto;
	padding: 5rem;
	box-shadow: 0 0 40px ${theme.lightGreyOne};
	border-radius: 5px;
	width: 50rem;
`;

export default class AddNewContact extends Component {
	render() {
		return (
			<Container>
				<Icons label="star" />
				<Icons label="phone" />
				<Icons label="user" />
				<Icons label="mail" />
				<Icons label="location" />
				<Icons label="suitcase" />
				<Icons label="dropdown" />
				<Icons label="photo" />
			</Container>
		);
	}
}
