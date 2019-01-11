import React, { Component } from "react";
import styled from "styled-components";
import Contact from "../../../assets/icons/contacts.svg";
import User from "../../../assets/icons/user.svg";
import Star from "../../../assets/icons/star.svg";
import Phone from "../../../assets/icons/phone.svg";
import Mail from "../../../assets/icons/mail.svg";
import Location from "../../../assets/icons/location.svg";
import Suitcase from "../../../assets/icons/suitcase.svg";
import DropDown from "../../../assets/icons/ic-arrow-drop-down-36px.svg";
import Photo from "../../../assets/icons/icon-add-a-photo.svg";

const Image = styled.img`
	width: 1.8rem;
`;

export default class Icons extends Component {
	render() {
		const { label } = this.props;
		switch (label) {
			case "contact":
				return <Image src={Contact} alt="" />;
			case "user":
				return <Image src={User} alt="" />;
			case "star":
				return <Image src={Star} alt="" />;
			case "phone":
				return <Image src={Phone} alt="" />;
			case "mail":
				return <Image src={Mail} alt="" />;
			case "location":
				return <Image src={Location} alt="" />;
			case "suitcase":
				return <Image src={Suitcase} alt="" />;
			case "dropdown":
				return <Image src={DropDown} alt="" />;
			case "photo":
				return <Image src={Photo} alt="" />;
			default:
				return null;
		}
	}
}
