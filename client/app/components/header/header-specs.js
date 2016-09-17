import React from "react";
import { expect } from "chai";
import Header from "./header";
import { render } from 'enzyme';

describe("<Header />", () => {

	it("header p tag renders brand name", () =>{
		const wrapper = render(<Header BrandName="Brocollo and Co."/>);
		expect(wrapper.text()).to.contain('Brocollo and Co.');
	});

});