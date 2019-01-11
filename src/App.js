import React, { Component } from "react";
import "circular-std";
import Logo from "./components/elements/Logo/Logo";
import Navigation from "./components/elements/Navigation/Navigation";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Application Sample</h1>
				<p>Paragraph text</p>
				<Logo />
				<Navigation />
			</div>
		);
	}
}

export default App;
