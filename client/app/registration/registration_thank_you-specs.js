import React from "react";
import { expect } from "chai";
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import UI from '../components/UIComponents/ui';
import ThankYou from '../registration/registration_thank_you';


describe("<ThankYou />", () => {
   	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<ThankYou/>);
	});
	it("should have class thankyou", () =>{
		expect(wrapper.find(".thankyou")).to.have.length(1);
	});

	it("h3 should show text ", () =>{
		const h3 = wrapper.find('h3');
		expect(h3.text()).to.contain('All done!');
	});

	it("p should show text ", () =>{
		const P = wrapper.find('p');
		expect(P.text()).to.contain('You will be one of the first to experience Brocoli & Co. when we launch');
	});

	it('simulates button click events only once', () => {
	    const onButtonClick = sinon.spy();
	    const wrapper = shallow(
	      <UI.Button OnClick={onButtonClick}>Ok</UI.Button>
	    );
	    wrapper.find('button').simulate('click');
	    expect(onButtonClick.calledOnce).to.equal(true);
	});


});