import React, { Component } from "react";

export default class withError extends Component {
	state = {
		error: null
	};

	render() {
		const { children } = this.props;

		if (this.state.error) {
			return <div>Something went wrong</div>;
		}

		return <div>{children}</div>;
	}
}
