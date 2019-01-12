import React, { Component } from "react";
import styled from "styled-components";
import Sidebar from "../elements/Sidebar/Sidebar";
import { Card } from "../elements/Card/Card";
import theme from "../elements/Icons/Colors";

const ContentWrapper = styled.div`
	padding: 3rem;
	display: flex;

	& > * {
		margin-right: 2rem;
		width: 24rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 1060px) {
		flex-wrap: wrap;
	}
`;

export const CardHeading = styled.p`
	color: #84abf1;
	font-size: 1.3rem;

	span {
		color: #ccc;
	}
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

export const ListTextSecondary = styled(ListText)`
	color: ${theme.brand};
`;

const AccountWrapper = styled.div`
	display: flex;

	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export default class Account extends Component {
	render() {
		return (
			<>
				<AccountWrapper>
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
						<Card style={{ height: "20rem" }}>
							<CardHeadingSecondary>
								Control how your contacts are organised
							</CardHeadingSecondary>
							<div style={{ padding: "0 2rem" }}>
								<ListTextSecondary>New Contact</ListTextSecondary>
								<ListTextSecondary>Add Account</ListTextSecondary>
								<ListTextSecondary>Sync Options</ListTextSecondary>
							</div>
						</Card>
						<Card style={{ height: "20rem", margin: 0 }}>
							<CardHeadingSecondary>Manage Profile</CardHeadingSecondary>
							<div style={{ padding: "0 2rem" }}>
								<ListTextSecondary>Edit Profile</ListTextSecondary>
							</div>
						</Card>
					</ContentWrapper>
				</AccountWrapper>
			</>
		);
	}
}
