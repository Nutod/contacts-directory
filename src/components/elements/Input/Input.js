import React from "react";
import styled from "styled-components";

const InputItem = styled.input`
	border: none;
	border-bottom: 1px solid #eee;
	outline: none;
	background: transparent;
	font-size: 1.8rem;
	width: 26rem;
	margin-bottom: 1rem;
`;

const InvalidInput = styled(InputItem)`
	border-bottom: 5px solid red;
`;

export default function Input({
	elementconfig,
	value,
	change,
	invalid,
	touched
}) {
	let InputElement = null;
	if (touched) {
		InputElement = (
			<InvalidInput {...elementconfig} value={value} onChange={change} />
		);
	} else {
		InputElement = (
			<InvalidInput {...elementconfig} value={value} onChange={change} />
		);
	}

	return InputElement;
}
