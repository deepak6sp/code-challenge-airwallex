import React from "react";
import { expect } from "chai";
import Footer from "./footer";
import { shallow, render } from 'enzyme';

describe("<Footer />", () => {

	it('renders two `p`s', () => {
	    const wrapper = render(<Footer />);
	    expect(wrapper.find('p').length).to.equal(2);
	});

	it("p with heart should display text", () =>{
		const wrapper = shallow(<Footer/>);
		const P = wrapper.find('.footerTitle');
		expect(P.text()).to.contain('Made with in Melbourne');
	});

	it("p with copyrights should display text", () =>{
		const wrapper = render(<Footer Copyrights = "@ 2016 Broccoli and Co. All rights reversed" />);
		expect(wrapper.text()).to.contain('@ 2016 Broccoli and Co. All rights reversed');
	});

});