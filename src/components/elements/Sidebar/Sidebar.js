import React from "react";
import styled from "styled-components";
import user from "../../../assets/images/user.jpg";
import theme from "../Icons/Colors";
import Icons from "../Icons/Icons";

const SidebarWrapper = styled.div`
	width: 20rem;
	height: 100vh;
	border-right: 5px solid #eee;
`;

const UserInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;
	margin-top: 1rem;
`;

export const UserImageWrapper = styled.div`
	width: 5rem;
	margin-right: 1rem;
`;

export const UserImage = styled.img`
	width: 100%;
	border-radius: 50%;
	border: 4px solid ${theme.lightGreyThree};
`;

const UserInfoName = styled.p`
	font-size: 1.5rem;
	margin: 0;
	line-height: 1;
`;

const UserInfoLocation = styled.div`
	font-size: 1rem;
	display: flex;
	align-items: center;
	margin-left: -1rem;
	margin-top: -0.7rem;
	color: ${theme.lightGreyOne};
`;

const SidebarNavigationWrapper = styled.div`
	margin-bottom: 4rem;
	padding: 2rem;

	span {
		font-size: 1.3rem;
		margin-left: 1rem;
		color: ${theme.lightGreyThree};

		&:hover {
			color: crimson;
		}
	}
`;

const SidebarNavItem = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem;
	padding: 0.5rem;
`;

const SidebarFooterNavigationWrapper = styled.div`
	padding: 2rem;

	span {
		font-size: 1.3rem;
		margin-left: 1rem;
		color: ${theme.lightGreyThree};

		&:hover {
			color: crimson;
		}
	}
`;

const SidebarFooterNavItem = styled(SidebarNavItem)``;

export default function Sidebar() {
	return (
		<SidebarWrapper>
			<UserInfoWrapper>
				<UserImageWrapper>
					<UserImage src={user} alt="User" />
				</UserImageWrapper>
				<div>
					<UserInfoName>Larry Etim</UserInfoName>
					<UserInfoLocation>
						<Icons label="location" />
						<p style={{ marginLeft: "-0.5rem" }}>Lagos, Nigeria</p>
					</UserInfoLocation>
				</div>
			</UserInfoWrapper>
			<SidebarNavigationWrapper>
				<SidebarNavItem>
					<Icons label="contact" />
					<span>Contacts</span>
				</SidebarNavItem>
				<SidebarNavItem>
					<Icons label="notification" />
					<span>Notifications</span>
				</SidebarNavItem>
				<SidebarNavItem>
					<Icons label="user" />
					<span>Accounts</span>
				</SidebarNavItem>
			</SidebarNavigationWrapper>
			<div style={{ height: "2px", background: "#eee" }} />
			<SidebarFooterNavigationWrapper>
				<SidebarFooterNavItem>
					<Icons label="settings" />
					<span>Settings</span>
				</SidebarFooterNavItem>
				<SidebarFooterNavItem>
					<Icons label="help" />
					<span>Help</span>
				</SidebarFooterNavItem>
				<SidebarFooterNavItem>
					<Icons label="feedback" />
					<span>Feedback</span>
				</SidebarFooterNavItem>
			</SidebarFooterNavigationWrapper>
		</SidebarWrapper>
	);
}
