import React, { Component } from "react";

export default class withError extends Component {
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
			return <div>Something went wrong</div>;
		}

		return <div>{children}</div>;
	}
}
