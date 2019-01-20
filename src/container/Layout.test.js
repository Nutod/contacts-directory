import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Layout from "./Layout";

Enzyme.configure({ adapter: new Adapter() });

describe("<Layout />", () => {
	const wrapper = shallow(<Layout />);
	it("Should return default true", () => {
		expect(true).toBe(true);
		console.log(wrapper.debug());
	});

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
