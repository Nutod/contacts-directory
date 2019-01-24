import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Sidebar from './Sidebar'

Enzyme.configure({
	adapter: new Adapter()
});

describe("<Sidebar />", () => {
	const wrapper = shallow(<Sidebar />);

	it("Should match snapshot", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});