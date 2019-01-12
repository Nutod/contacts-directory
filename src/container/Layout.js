import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import AddNewContact from "../components/contact/AddNewContact";
import Account from "../components/profile/Account";

export default class Layout extends Component {
	render() {
		return (
			<Switch>
				<Route path="/auth/sign-up" component={SignUp} />
				<Route path="/auth/sign-in" component={SignIn} />
				<Route path="/add-new" component={AddNewContact} />
				<Route path="/account" component={Account} />
				<Route path="/" exact component={SignIn} />
			</Switch>
		);
	}
}
