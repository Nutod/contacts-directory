import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Navigation from "./Navigation";

Enzyme.configure({
	adapter: new Adapter()
});

describe("<Navigation />", () => {
	const wrapper = shallow(<Navigation />);

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
