import React from "react";
import ReactDOM from 'react-dom';
import { expect } from "chai";
import { shallow } from 'enzyme';
import sinon from 'sinon';
import request from 'supertest';
import axios from  "axios";
import UI from '../components/UIComponents/ui';
import Registration from '../registration/registration';
import RegisterModal from 'react-modal';
import TestUtils from 'react-addons-test-utils';


describe("<Registration />", () => {
   	let wrapper, onSaveResponse, submitting, server, sandbox
	beforeEach(() => {
		wrapper = shallow(<Registration/>);
		submitting = false
		onSaveResponse = Promise.resolve();
	});

	it("should have class thankyou", () =>{
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
	    expect(wrapper.find(RegisterModal)).to.have.length(1);
	});

	describe("has form", ()=>{
		it('should have an initial fullName, email and confirmEmail state', () => {
		    expect(wrapper.state().fullName).to.equal('');
		    expect(wrapper.state().email).to.equal('');
		    expect(wrapper.state().confirmEmail).to.equal('');
		});

		it('should check and update fullName, email and confirmEmail state on submit', () => {
		    wrapper.find('#button').simulate('click');
		    expect(wrapper.state('fullName')).to.not.be.null;
		    expect(wrapper.state('fullName')).to.be.a( 'string' );
		    expect(wrapper.state('email')).to.not.be.null;
		    expect(wrapper.state('email')).to.be.a( 'string' );
		    expect(wrapper.state('confirmEmail')).to.not.be.null;
		    expect(wrapper.state('confirmEmail')).to.be.a( 'string' )
		});

		it("shows a spinner while submitting", () => {
			submitting = true
			const icon = wrapper.find('#serverResponse');
			expect(icon).to.have.length(1);
		});

		it('Should make an ajax request', () => {
		    axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',{})
	    	.then((response) => {
		      	expect(response.url).to.equal('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth')
		      	.done();
		    })
		})


	});

});