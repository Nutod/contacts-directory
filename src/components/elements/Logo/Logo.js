import React from "react";
import styled from "styled-components";
import LogoImage from "../../../assets/images/Logo.png";

const Image = styled.img`
	width: 5rem;
	margin: 4rem;
`;

export default function Logo() {
	return <Image src={LogoImage} alt="Logo" />;
}
