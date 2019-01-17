import React from "react";
import "circular-std";
import Layout from "./container/Layout";
import withError from "./HOCs/withError/withError";

export default function App() {
	return (
		<withError>
			<Layout />
		</withError>
	);
}
