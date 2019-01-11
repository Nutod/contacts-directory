import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../../assets/images/background.jpg";

const BackgroundContainer = styled.div`
	height: 50vh;
	width: 50vw;
`;

export default function Background() {
	return (
		<BackgroundContainer>
			<img src={BackgroundImage} alt="" style={{ width: "100%" }} />
		</BackgroundContainer>
	);
}
