import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Logo from "./Logo";

Enzyme.configure({
	adapter: new Adapter()
});

describe("<Logo Snapshot />", () => {
	const wrapper = shallow(<Logo />);

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
