import React from "react";
import Enzyme, {
	shallow
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Button from './Button'

Enzyme.configure({
	adapter: new Adapter()
});

describe("<Button />", () => {
	const wrapper = shallow( < Button / > );

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});