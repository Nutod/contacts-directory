import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import NavigationItem from "./NavigationItem";

Enzyme.configure({
	adapter: new Adapter()
});

describe("<NavigationItem />", () => {
	const wrapper = shallow(<NavigationItem />);

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
