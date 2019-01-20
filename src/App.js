import React from "react";
import "circular-std";
import Layout from "./container/Layout";
import WithError from "./HOCs/withError/WithError";

export default function App() {
	return (
		<WithError>
			<Layout />
		</WithError>
	);
}
