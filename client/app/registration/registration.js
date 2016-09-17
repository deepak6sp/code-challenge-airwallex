import { customStyles } from "./constant";
import './registration.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from  "axios";
import RegisterBox from 'react-modal';
import ThankYou from "./registration_thank_you";
import UI from '../components/UIComponents/ui';
import *  as FormValidations from "./registration_validations"; 

class Subscribe extends Component {
	constructor(props){
		super(props);
		this.state= {modalIsOpen : false, showForm : true, fullName:"", email: "", confirmEmail: "", errors: {}, count: 0};
	}

	callServer(){
		axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
		    name: this.state.fullName,
		    email: this.state.email
		}).then(response => {
			FormValidations.removeServerResponse();
			this.setState({showForm: false});
		})
		.catch(function (error) {
			FormValidations.removeServerResponse();
			FormValidations.addServerError();
		});
	}

	openModal(){
		this.setState({modalIsOpen : true});
	}

 	closeModal() {
	    this.setState({modalIsOpen: false, errors: {}, showForm: true, fullName:"", email: "", confirmEmail: "" });
	}

	handleChange(e){
		var state = {}, count = 0;
	    state[e.target.name] =  e.target.value;
	    this.setState(state);
	}

	handleBlur(e){
		if (this.state.count > 0){
		    var errors = FormValidations.validate(this.state.fullName, this.state.email, this.state.confirmEmail);
			this.setState({errors : errors});
		}
	}

	handleKeyDown(e){
		if(e.keyCode=='13' || e.which == '13'){
            e.preventDefault();
            return false;
        }
	}

	formSubmit(e){
		e.preventDefault();
		var errors = FormValidations.validate(this.state.fullName, this.state.email, this.state.confirmEmail);
		this.setState({errors : errors});
		FormValidations.removeServerResponse();
		if (Object.keys(errors).length == 0){
			FormValidations.addSpinner();
			this.callServer();
		} else {
			this.setState({count : 1});
		}
	}

    render() {
    	var showFormType = "";
		if (this.state.showForm){
			showFormType = <form onSubmit = {this.formSubmit.bind(this)}>
				<UI.Button OnClick={this.closeModal.bind(this)} className="close">X</UI.Button>
	          	<h3>Request an invite</h3>
	          	<hr/>
	          	
	          	<div className="form-input">
	          		{(this.state.errors.fullName != undefined) && <div className="error">{this.state.errors.fullName}</div>}
	            	<UI.InputText 
	            		Name = "fullName"
	            		Value = {this.state.fullName}
	            		OnChange={this.handleChange.bind(this)}
	            		OnBlur={this.handleBlur.bind(this)}
	            		OnKeyDown = {this.handleKeyDown.bind(this)}
	            		Placeholder="Enter full name"
	            	/>
	            	{/*<input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange.bind(this)} placeholder="Enter full name"/>*/}
	            </div>

	            <div className="form-input">
	            	{(this.state.errors.email != undefined) && <div className="error">{this.state.errors.email}</div>}
	            	<UI.InputText 
	            		Name = "email"
	            		Value = {this.state.email}
	            		OnChange={this.handleChange.bind(this)} 
	            		OnBlur={this.handleBlur.bind(this)}
	            		OnKeyDown = {this.handleKeyDown.bind(this)}
	            		Placeholder="Enter email"
	            	/>
	           	</div>
	            <div className="form-input">
	            	{(this.state.errors.confirmEmail != undefined) && <div className="error">{this.state.errors.confirmEmail}</div>}
	            	<UI.InputText 
	            		Name = "confirmEmail"
	            		Value = {this.state.confirmEmail}
	            		OnChange={this.handleChange.bind(this)} 
	            		OnBlur={this.handleBlur.bind(this)}
	            		OnKeyDown = {this.handleKeyDown.bind(this)}
	            		Placeholder="Confirm email"
	            	/>
	            </div>
	            <div id="serverResponse"></div>
	            <UI.Button> Send </UI.Button>
	            
	        </form>
		} else {
			showFormType = <ThankYou onClick={this.closeModal.bind(this)}/>
		}
        return ( 
        	<div>
        		<UI.Button OnClick={this.openModal.bind(this)}> Request an invite </UI.Button>
        		<RegisterBox
		          isOpen={this.state.modalIsOpen}
		          onRequestClose={this.closeModal.bind(this)}
		          shouldCloseOnOverlayClick={false}
		          style={customStyles} >

		          	{ showFormType }

		        </RegisterBox>
        	</div>
        );
    }
}

export default Subscribe