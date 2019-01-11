import React, { Component } from "react";
import styled from "styled-components";
import SignUp from "../components/auth/SignUp";

const Container = styled.div`
	position: relative;
	height: 100vh;
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
