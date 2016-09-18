import React from "react";
import ReactDOM from 'react-dom';
import { expect } from "chai";
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UI from '../components/UIComponents/ui';
import Registration from '../registration/registration';
import RegisterModal from 'react-modal';
import TestUtils from 'react-addons-test-utils';


describe("<Registration />", () => {

	it("should have class thankyou", () =>{
		const wrapper = shallow(<Registration/>);
		expect(wrapper.find(".registration")).to.have.length(1);
	});

	it('simulates button click events only once', () => {
	    const onButtonClick = sinon.spy();
	    const wrapper = shallow(
	      <UI.Button OnClick={onButtonClick}>Request an invite</UI.Button>
	    );
	    wrapper.find('button').simulate('click');
	    expect(onButtonClick.calledOnce).to.equal(true);
	});

	it('should contain <RegisterModal /> component', () => {
	    const wrapper = shallow(<Registration/>);
	    expect(wrapper.find(RegisterModal)).to.have.length(1);
	});

	it('should have an initial fullName, email and confirmEmail state', function () {
	    const wrapper = shallow(<Registration/>);
	    expect(wrapper.state().fullName).to.equal('');
	    expect(wrapper.state().email).to.equal('');
	    expect(wrapper.state().confirmEmail).to.equal('');
	});

	it('should update the fullName, email and confirmEmail state state on submit', function () {
	    const wrapper = shallow(<Registration/>);
	    wrapper.setState({ email: 'mail@mail.com' });
	    wrapper.find('#button').simulate('click');
	    expect(wrapper.state('email')).to.equal('mail@mail.com');
	});


	it("h3 should show text ", () =>{
		const wrapper = shallow(<ThankYou/>);
		const h3 = wrapper.find('h3');
		expect(h3.text()).to.contain('All done!');
	});

	it("p should show text ", () =>{
		const wrapper = shallow(<ThankYou/>);
		const P = wrapper.find('p');
		expect(P.text()).to.contain('You will be one of the first to experience Brocoli & Co. when we launch');
	});

	


});