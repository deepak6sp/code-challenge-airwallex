import React from "react";
import { expect } from "chai";
import Footer from "./footer";
import { shallow } from 'enzyme';

describe("<Footer />", () => {

	it("p should display text", () =>{
		const wrapper = shallow(<Footer/>);
		const P = wrapper.find("p");
		expect(P).to.have.been.called.twice;

	});

});