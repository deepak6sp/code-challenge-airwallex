import React from "react";
import { expect } from "chai";
import { shallow } from 'enzyme';
import Home from "./home";
import Registration from '../registration/registration';


describe("<Home />", () => {

	it("h1 should show heading ", () =>{
		const wrapper = shallow(<Home/>);
		const h1 = wrapper.find('h1');
		expect(h1.text()).to.contain('A better way to enjoy every day.');
	});

	it("p should show text ", () =>{
		const wrapper = shallow(<Home/>);
		const P = wrapper.find('p');
		expect(P.text()).to.contain('Be the first to know when we launch');
	});

	it('should render <Registration /> when passed in', () => {
	    const wrapper = shallow(<Home/>);
	    expect(wrapper.contains(<Registration/>)).to.equal(true);
	});


});