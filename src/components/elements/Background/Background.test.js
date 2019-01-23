import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Background from './Background'

Enzyme.configure({ adapter: new Adapter() });

describe("<Background />", () => {
  const wrapper = shallow(<Background />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
