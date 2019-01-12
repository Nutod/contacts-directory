import React from "react";
import Sidebar from "../elements/Sidebar/Sidebar";

export default function Profile() {
	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<div>Content</div>
		</div>
	);
}
