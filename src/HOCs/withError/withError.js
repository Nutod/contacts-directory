import React, { Component } from "react";

export default class WithError extends Component {
	state = {
		error: null
	};

	componentDidCatch = error => {
		this.setState({ error });
	};

	render() {
		const { children } = this.props;
		const { error } = this.state;

		if (error) {
			return <p>Something went wrong!</p>;
		}

		return <>{children}</>;
	}
}
