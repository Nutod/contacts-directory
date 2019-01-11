import React from "react";
import LogoImage from "../../../assets/images/Logo.png";
import styled from "styled-components";

const Image = styled.img`
	width: 8rem;
	margin: 4rem;
`;

export default function Logo() {
	return <Image src={LogoImage} alt="Logo" />;
}
