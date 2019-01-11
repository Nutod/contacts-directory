import React, { Component } from "react";
import "circular-std";
import Logo from "./components/elements/Logo/Logo";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Application Sample</h1>
				<p>Paragraph text</p>
				<Logo />
			</div>
		);
	}
}

export default App;
