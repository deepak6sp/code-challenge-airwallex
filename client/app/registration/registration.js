import { customStyles } from "./constant";
import './registration.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RegisterBox from 'react-modal';
import UI from '../components/UIComponents/ui';
import *  as FormValidations from "./registration_validations"; 

class Subscribe extends Component {
	constructor(props){
		super(props);
		this.state= {modalIsOpen : false, showForm : true, fullName:"", email: "", confirmEmail: "", errors: {}};
	}
	openModal(){
		this.setState({modalIsOpen : true});
	}

 	closeModal() {
	    this.setState({modalIsOpen: false, errors: {}, showForm: true });
	}

	handleChange(e){
		var state = {};
	    state[e.target.name] =  e.target.value;
	    this.setState(state);
	}


	formSubmit(e){
		e.preventDefault();
		var errors = FormValidations.validate(this.state.fullName, this.state.email, this.state.confirmEmail);
		this.setState({errors : errors});
		if (Object.keys(errors).length != 0){
			console.log("errros occured");
			
		}else{
			console.log("no errors");
			this.setState({showForm: false});
		}
	}
	
    render() {
    	var showFormType = "";

		if (this.state.showForm){
			showFormType = <form onSubmit = {this.formSubmit.bind(this)}>
	          	<h3>Request an invite</h3>
	          	<hr/>
	          	
	          	<div className="form-input">
	          		{(this.state.errors.fullName != undefined) && <div className="error">{this.state.errors.fullName}</div>}
	            	<UI.InputText 
	            		Name = "fullName"
	            		Value = {this.state.fullName}
	            		OnChange={this.handleChange.bind(this)} 
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
	            		Placeholder="Enter email"
	            	/>
	           	</div>
	            <div className="form-input">
	            	{(this.state.errors.confirmEmail != undefined) && <div className="error">{this.state.errors.confirmEmail}</div>}
	            	<UI.InputText 
	            		Name = "confirmEmail"
	            		Value = {this.state.confirmEmail}
	            		OnChange={this.handleChange.bind(this)} 
	            		Placeholder="Confirm email"
	            	/>
	            </div>
	            <UI.Button> Send </UI.Button>
	        </form>
		} else {
			showFormType = <div>Thanks you</div>
		}
        return ( 
        	<div>
        		<UI.Button OnClick={this.openModal.bind(this)}> Request an invite </UI.Button>
        		<RegisterBox
		          isOpen={this.state.modalIsOpen}
		          onRequestClose={this.closeModal.bind(this)}
		          style={customStyles} >

		          	<UI.Button OnClick={this.closeModal.bind(this)} className="close">X</UI.Button>
		          	{ showFormType }
		        </RegisterBox>
        	</div>
        );
    }
}

export default Subscribe