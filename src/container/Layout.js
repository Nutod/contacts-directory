import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";

const Container = styled.div`
	position: relative;
	height: 100vh;
`;

export default class Layout extends Component {
	render() {
		return (
			<Container>
				{/* <SignUp /> */}
				<Switch>
					<Route path="/auth/sign-up" component={SignUp} />
					<Route path="/auth/sign-in" component={SignIn} />
					<Route path="/" exact component={SignIn} />
				</Switch>
			</Container>
		);
	}
}
