import React from "react";
import styled from "styled-components";
import Sidebar, {
	UserImageWrapper,
	UserImage
} from "../elements/Sidebar/Sidebar";
import { Card } from "../elements/Card/Card";
import { CardHeading, ListTextSecondary } from "./Account";
import user from "../../assets/images/user.jpg";
import theme from "../elements/Icons/Colors";
import Icons from "../elements/Icons/Icons";

const ContentWrapper = styled.div`
	padding: 2rem;
`;

const ProfileInfo = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const ProfileDetailsWrapper = styled.div``;

const UserImageSecondaryWrapper = styled(UserImageWrapper)`
	width: 16rem;

	@media (max-width: 900px) {
		width: 12rem;
	}
`;

const UserImageSecondary = styled(UserImage)`
	border: 8px solid ${theme.lightGreyThree};
`;

const EditText = styled.span`
	color: ${theme.brand};
	font-size: 1.2rem;
	margin-left: 3rem;
`;

const ImageWrapper = styled(Card)`
	text-align: center;
	padding: 4rem 7rem;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
	}
`;

const CardSecondary = styled(Card)`
	width: 70vw;
	padding: 4rem;

	@media (max-width: 800px) {
		width: 60vw;
	}

	@media (max-width: 600px) {
		width: 60vw;
	}
`;

const ProfileWrapper = styled.div`
	display: flex;

	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export default function Profile() {
	return (
		<ProfileWrapper>
			<Sidebar />
			<ContentWrapper>
				<CardSecondary>
					<CardHeading>
						Accounts <span> > Profile</span>
					</CardHeading>
					<ProfileInfo>
						<ProfileDetailsWrapper>
							<div>
								<p style={{ color: "#ccc", fontSize: "1rem", margin: "0" }}>
									Name
								</p>
								<p style={{ margin: "0" }}>
									Larry Etim <EditText>Edit</EditText>
								</p>
							</div>
							<div
								style={{
									marginTop: "1.5rem",
									display: "flex",
									alignItems: "center"
								}}
							>
								<Icons label="phone" />
								<div style={{ marginLeft: "1rem" }}>
									<p style={{ margin: "0", fontSize: "1.3rem", color: "#555" }}>
										+234-804-383-3908<EditText>Edit</EditText>
									</p>
									<p
										style={{
											margin: "0",
											color: "#ccc",
											fontSize: "1rem",
											marginTop: "-0.7rem"
										}}
									>
										Mobile
									</p>
								</div>
							</div>
							<div
								style={{
									marginTop: "1.5rem",
									display: "flex",
									alignItems: "center"
								}}
							>
								<Icons label="phone" />
								<div style={{ marginLeft: "1rem" }}>
									<p style={{ margin: "0", fontSize: "1.3rem", color: "#555" }}>
										+234-01-256-290<EditText>Edit</EditText>
									</p>
									<p
										style={{
											margin: "0",
											color: "#ccc",
											fontSize: "1rem",
											marginTop: "-0.7rem"
										}}
									>
										Other
									</p>
								</div>
							</div>
							<div
								style={{
									marginTop: "1.5rem",
									display: "flex",
									alignItems: "center"
								}}
							>
								<Icons label="mail" />
								<div style={{ marginLeft: "1rem" }}>
									<p style={{ margin: "0", fontSize: "1.3rem", color: "#555" }}>
										larryetim@gmail.com<EditText>Edit</EditText>
									</p>
									<p
										style={{
											margin: "0",
											color: "#ccc",
											fontSize: "1rem",
											marginTop: "-0.7rem"
										}}
									>
										Email
									</p>
								</div>
							</div>
							<div
								style={{
									marginTop: "1.5rem",
									display: "flex",
									alignItems: "center"
								}}
							>
								<Icons label="suitcase" />
								<div style={{ marginLeft: "1rem" }}>
									<p style={{ margin: "0", fontSize: "1.3rem", color: "#555" }}>
										Rexxe Powerplant<EditText>Edit</EditText>
									</p>
									<p
										style={{
											margin: "0",
											color: "#ccc",
											fontSize: "1rem",
											marginTop: "-0.7rem"
										}}
									>
										Word
									</p>
								</div>
							</div>
						</ProfileDetailsWrapper>
						<ImageWrapper>
							<UserImageSecondaryWrapper>
								<UserImageSecondary src={user} />
							</UserImageSecondaryWrapper>
							<ListTextSecondary>Change Image</ListTextSecondary>
						</ImageWrapper>
					</ProfileInfo>
				</CardSecondary>
			</ContentWrapper>
		</ProfileWrapper>
	);
}
