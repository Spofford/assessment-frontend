import React from "react"
import Enzyme from 'enzyme';
import expect from "expect"
import { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

import { Home } from "./"

describe("<Home />", () => {
  it("should render", () => {
    const renderedComponent = shallow(
      <Home />
    )
    expect(renderedComponent.is("div")).toEqual(true)
  })
})
