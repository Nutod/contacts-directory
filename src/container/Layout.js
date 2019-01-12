import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "../HOCs/asyncComponent/asyncComponent";

// TODO: Default should load  Account if authenticated else, redirect to auth page
// TODO: Change Icons
// TODO: Add Responsiveness

const asyncSignUp = asyncComponent(() => {
	return import("../components/auth/SignUp");
});

const asyncSignIn = asyncComponent(() => {
	return import("../components/auth/SignIn");
});

const asyncAddNewContact = asyncComponent(() => {
	return import("../components/contact/AddNewContact");
});

const asyncAccount = asyncComponent(() => {
	return import("../components/profile/Account");
});

const asyncProfile = asyncComponent(() => {
	return import("../components/profile/Profile");
});

const asynContactList = asyncComponent(() => {
	return import("../components/contact/ContactList");
});

export default class Layout extends Component {
	render() {
		return (
			<Switch>
				<Route path="/auth/sign-up" component={asyncSignUp} />
				<Route path="/auth/sign-in" component={asyncSignIn} />
				<Route path="/add-new" component={asyncAddNewContact} />
				<Route path="/account" component={asyncAccount} />
				<Route path="/profile" component={asyncProfile} />
				<Route path="/contact-list" component={asynContactList} />
				<Route path="/" exact component={asyncSignIn} />
			</Switch>
		);
	}
}
