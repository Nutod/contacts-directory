import React from "react";
import styled from "styled-components";
import Sidebar from "../elements/Sidebar/Sidebar";
import { Card } from "../elements/Card/Card";
import { CardHeading } from "../profile/Account";
import Icons from "../elements/Icons/Icons";
import theme from "../elements/Icons/Colors";
import List from "./List";

const ContentWrapper = styled(Card)`
	margin: 3rem;
	padding: 3rem;
	width: 75vw;
`;

const SectionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const SearchInput = styled.input`
	height: 3rem;
	margin-right: 3rem;
	border-radius: 5rem;
	outline: none;
	border: 1px solid #ccc;
	padding: 0 2rem;

	&::placeholder {
		color: #ccc;
	}
`;

const ContactHeader = styled.div`
	margin: 1rem 8rem;
	display: flex;
`;

const HeadingText = styled.p`
	color: ${theme.lightGreyThree};
	font-size: 1.2rem;
	margin-left: 1rem;
`;

const ContactHeaderText = styled(HeadingText)`
	font-size: 1rem;
	margin-right: 10rem;
	padding: 5rem;
`;

const ContactContainer = styled.div`
	margin-top: -6.5rem;
	margin-left: 8rem;
`;

const ContactListWrapper = styled.div`
	display: flex;
`;

export default function ContactList() {
	return (
		<ContactListWrapper>
			<Sidebar />
			<ContentWrapper>
				<SectionHeader>
					<CardHeading>Contacts</CardHeading>
					<NavWrapper>
						<SearchInput
							type="search"
							name="search"
							id="search"
							placeholder="Search Transactions"
						/>
						<p style={{ fontSize: "1.8rem", color: "#aaa" }}>+</p>
						<HeadingText>Google</HeadingText>
						<Icons label="dropdown" />
					</NavWrapper>
				</SectionHeader>
				<ContactHeader>
					<ContactHeaderText>Name</ContactHeaderText>
					<ContactHeaderText>Phone Number</ContactHeaderText>
					<ContactHeaderText>Email</ContactHeaderText>
				</ContactHeader>
				<ContactContainer>
					<List />
					<List />
					<List />
					<List />
				</ContactContainer>
			</ContentWrapper>
		</ContactListWrapper>
	);
}
