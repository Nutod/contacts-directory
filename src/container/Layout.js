import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "../HOCs/asyncComponent/asyncComponent";
// Import Redirect here

// TODO: Change Icons

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
	// State used for full auth
	// state = {
	// 	auth: false
	// };

	// UNSAFE_componentWillMount = () => {
	// 	const user = localStorage.getItem("username");

	// 	this.setState(() => ({ auth: user !== null }));
	// };

	render() {
		let routes = (
			<>
				<Route path="/auth/sign-up" component={asyncSignUp} />
				<Route path="/auth/sign-in" component={asyncSignIn} />
				<Route path="/add-new" component={asyncAddNewContact} />
				<Route path="/account" component={asyncAccount} />
				<Route path="/profile" component={asyncProfile} />
				<Route path="/contact-list" component={asynContactList} />
				<Route path="/" exact component={asyncAccount} />
			</>
		);

		// Full Auth flow implemented here
		// let routes = null;
		// if (!this.state.auth) {
		// 	routes = (
		// 		<>
		// 			<Route path="/auth/sign-up" component={asyncSignUp} />
		// 			<Route path="/auth/sign-in" component={asyncSignIn} />
		// 			<Redirect to="/auth/sign-up" />
		// 		</>
		// 	);
		// } else {
		// 	routes = (
		// 		<>
		// 			<Route path="/auth/sign-up" component={asyncSignUp} />
		// 			<Route path="/auth/sign-in" component={asyncSignIn} />
		// 			<Route path="/add-new" component={asyncAddNewContact} />
		// 			<Route path="/account" component={asyncAccount} />
		// 			<Route path="/profile" component={asyncProfile} />
		// 			<Route path="/contact-list" component={asynContactList} />
		// 			<Route path="/" exact component={asyncAccount} />
		// 		</>
		// 	);
		// }
		return <Switch>{routes}</Switch>;
	}
}
