import React, { Component } from "react";
import Contact from "../../../assets/icons/contacts.svg";

export default class Icons extends Component {
	render() {
		const { label } = this.props;
		switch (label) {
			case "contact":
				return <img src={Contact} alt="" style={{ width: "5rem" }} />;

			default:
				break;
		}
	}
}
