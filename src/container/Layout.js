import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import AddNewContact from "../components/contact/AddNewContact";

export default class Layout extends Component {
	render() {
		return (
			<Switch>
				<Route path="/auth/sign-up" component={SignUp} />
				<Route path="/auth/sign-in" component={SignIn} />
				<Route path="/add-new" component={AddNewContact} />s
				<Route path="/" exact component={SignIn} />
			</Switch>
		);
	}
}
