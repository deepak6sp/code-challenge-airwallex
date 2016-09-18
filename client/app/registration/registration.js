import { customStyles } from "./constant";
import './registration.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from  "axios";

import RegisterModal from 'react-modal';
import ThankYou from "./registration_thank_you";
import UI from '../components/UIComponents/ui';
import *  as FormValidations from "./registration_validations";
import *  as Utils from "./registration_utils";  

class Registration extends Component {
	constructor(props){
		super(props);
		this.state= {modalIsOpen : false, showForm : true, fullName:"", email: "", confirmEmail: "", errors: {}, count: 0};
	}
    
    // this will call server - if true change the current form to thankyou page or display error
 	callServer(){
		axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
		    name: this.state.fullName,
		    email: this.state.email
		}).then(response => {
			Utils.removeServerResponse();
			this.setState({showForm: false});
		})
		.catch(function (error) {
			Utils.removeServerResponse();
			Utils.addServerError();
		});
	}

	openModal(){
		this.setState({modalIsOpen : true});
	}

 	closeModal() {
	    this.setState({modalIsOpen: false, errors: {}, showForm: true, fullName:"", email: "", confirmEmail: "" });
	}

	// create objects and change the the state of name and email
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

	// prevent page close from pressing enter button
	handleKeyDown(e){
		if(e.keyCode=='13' || e.which == '13'){
            e.preventDefault();
            return false;
        }
	}

	//submit from on button click
	formSubmit(e){
		e.preventDefault();
		var errors = FormValidations.validate(this.state.fullName, this.state.email, this.state.confirmEmail);
		this.setState({errors : errors});
		Utils.removeServerResponse();
		if (Object.keys(errors).length == 0){
			Utils.addSpinner();
			this.callServer();
		} else {
			this.setState({count : 1});
		}
	}

    render() {
    	var showFormType = "";
		if (this.state.showForm){   // show user form if true else show thankyou page
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
	           
	            <UI.Button id="button"> Send </UI.Button>
	            <div id="serverResponse"></div>
	            
	        </form>
		} else {
			showFormType = <ThankYou onClick={this.closeModal.bind(this)}/>
		}
        return ( 
        	<div className="registration">
        		<UI.Button OnClick={this.openModal.bind(this)}> Request an invite </UI.Button>
        		{/*using popop from react-modal library*/}
        		<RegisterModal
		          isOpen={this.state.modalIsOpen}
		          onRequestClose={this.closeModal.bind(this)}
		          shouldCloseOnOverlayClick={false}
		          style={customStyles} >

		          	{showFormType} {/*show user form if true else show thankyou page */}

		        </RegisterModal>
        	</div>
        );
    }
}

export default Registration