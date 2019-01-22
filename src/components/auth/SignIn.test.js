import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import SignIn from './SignIn'

Enzyme.configure({ adapter: new Adapter() });

describe("<SignIn />", () => {
  const wrapper = shallow(<SignIn />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
