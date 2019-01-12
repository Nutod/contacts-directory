import React from "react";
import styled from "styled-components";
import Sidebar from "../elements/Sidebar/Sidebar";
import { Card } from "../elements/Card/Card";
import theme from "../elements/Icons/Colors";

const ContentWrapper = styled.div`
	padding: 5rem;
	display: grid;
	grid-template-columns: 2fr 2fr 1.5fr;
`;

const CardHeading = styled.p`
	color: #84abf1;
	font-size: 1.3rem;
`;

const CardHeadingSecondary = styled(CardHeading)`
	color: #333;
	font-size: 1.2rem;
	text-align: center;
`;

const ListText = styled.p`
	color: ${theme.lightGreyThree};
	font-size: 1.2rem;
`;

const ListTextSecondary = styled(ListText)`
	color: ${theme.brand};
`;

export default function Account() {
	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<ContentWrapper>
				<Card style={{ height: "40rem", width: "30rem" }}>
					<CardHeading>Accounts</CardHeading>
					<div style={{ padding: "2rem" }}>
						<ListText>Import from Device</ListText>
						<ListText>Import from Google</ListText>
						<ListText>Import from Yahoo</ListText>
						<ListText>Import from Facebook</ListText>
						<ListText>Import from Whatsapp</ListText>
					</div>
				</Card>
				<Card style={{ height: "20rem", width: "30rem" }}>
					<CardHeadingSecondary>
						Control how your contacts are organised
					</CardHeadingSecondary>
					<div style={{ padding: "0 2rem" }}>
						<ListTextSecondary>New Contact</ListTextSecondary>
						<ListTextSecondary>Add Account</ListTextSecondary>
						<ListTextSecondary>Sync Options</ListTextSecondary>
					</div>
				</Card>
				<Card style={{ height: "20rem", width: "30rem" }}>
					<CardHeadingSecondary>Manage Profile</CardHeadingSecondary>
					<div style={{ padding: "0 2rem" }}>
						<ListTextSecondary>Edit Profile</ListTextSecondary>
					</div>
				</Card>
			</ContentWrapper>
		</div>
	);
}
