import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Account from './Account'

Enzyme.configure({ adapter: new Adapter() });

describe("<Account />", () => {
	const wrapper = shallow(<Account />);
	it("Should return default true", () => {
		expect(true).toBe(true);
	});

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
