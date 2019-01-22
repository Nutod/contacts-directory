import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import SignUp from './SignUp'

Enzyme.configure({ adapter: new Adapter() });

describe("<SignUp />", () => {
  const wrapper = shallow(<SignUp />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
