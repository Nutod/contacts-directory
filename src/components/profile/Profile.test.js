import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Profile from "./Profile";

Enzyme.configure({ adapter: new Adapter() });

describe("<Profile />", () => {
	const wrapper = shallow(<Profile />);
	it("Should return default true", () => {
		expect(true).toBe(true);
	});

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
