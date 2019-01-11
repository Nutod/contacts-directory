import React, { Component } from "react";
import styled from "styled-components";
import Contact from "../../../assets/icons/contacts.svg";
import Edit from "../../../assets/icons/edit.svg";
import Feedback from "../../../assets/icons/feedback.svg";

const Image = styled.img`
	width: 2.5rem;
`;

export default class Icons extends Component {
	render() {
		const { label } = this.props;
		switch (label) {
			case "contact":
				return <Image src={Contact} alt="" />;
			case "edit":
				return <Image src={Edit} alt="" />;
			case "feedback":
				return <Image src={Feedback} alt="" />;

			default:
				break;
		}
	}
}
