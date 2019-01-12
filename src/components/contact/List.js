import React from "react";
import styled from "styled-components";
import { UserImageWrapper, UserImage } from "../elements/Sidebar/Sidebar";
import user from "../../assets/images/user.jpg";

const ListWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
	padding: 0.2rem;

	&:hover {
		background: #e2e2e2;
	}
`;

const UserImageWrapperSecondary = styled(UserImageWrapper)`
	width: 4rem;
	height: 4rem;
	margin-right: 2rem;
`;

const UserImageSecondary = styled(UserImage)`
	border: 3px solid rgba(202, 59, 102, 0.5);
`;

// TODO: Change the Paragraph into styled component for responsiveness
export default function List({ name, phone, email }) {
	return (
		<ListWrapper>
			<UserImageWrapperSecondary>
				<UserImageSecondary src={user} />
			</UserImageWrapperSecondary>
			<p style={{ margin: "0", fontSize: "1.1rem", marginRight: "13rem" }}>
				Aaron Cooperfield
			</p>
			<p style={{ margin: "0", fontSize: "1.1rem", marginRight: "15rem" }}>
				+234-803-560-2190
			</p>
			<p style={{ margin: "0", fontSize: "1.1rem" }}>cooperfield.a@mail.com</p>
		</ListWrapper>
	);
}
