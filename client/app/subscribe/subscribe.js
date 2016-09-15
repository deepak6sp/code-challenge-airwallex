import { customStyles } from "./constant";
import './subscribe.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Subscribe extends Component {
	constructor(props){
		super(props);
		this.state= {modalIsOpen : false, fullName:"", email: "", confirmEmail: "", errors: {}};
	}
	openModal(){
		this.setState({modalIsOpen : true});
	}

 	closeModal() {
	    this.setState({modalIsOpen: false,errors: {} });
	}

	handleChange(e){
		var state = {};
	    state[e.target.name] =  e.target.value;
	    this.setState(state);
	}

	_validate(){
		var errors = {}
	    if(this.state.fullName == "") {
	      	errors.fullName = "Username is required";
	    } else if (this.state.fullName.length < 3){
	    	errors.fullName = "Username should be minimum of 3 characters";
	    }
	    if(this.state.email == "") {
	      errors.email = "Email is required";
	    } else {
	    	var email = this.state.email;
	    	var checkAt = email.indexOf("@");
	    	var checkDot = email.lastIndexOf(".");
	    	if (checkAt < 1 || checkDot < checkAt+2 || checkDot+2>=email.length) {
		        errors.email = "Not a valid e-mail address";
    		}
	    }
	    if(this.state.confirmEmail == "") {
	      errors.confirmEmail = "Confirm email is required";
	    }
	    else if (this.state.confirmEmail != this.state.email){
	    	errors.confirmEmail = "Emails does not match";
	    }
	    return errors;
	}

	formSubmit(e){
		e.preventDefault();
		var errors = this._validate();
		this.setState({errors : errors});
		console.log("errors="+JSON.stringify(errors));
		if (Object.keys(errors).length != 0){
			console.log("errros occured");
		}else{
			console.log("no errors");

		}
	}
    render() {
        return ( 
        	<div>
        		<button onClick={this.openModal.bind(this)}> Request an invite </button>
        		<Modal
		          isOpen={this.state.modalIsOpen}
		          onRequestClose={this.closeModal.bind(this)}
		          style={customStyles} >

		          	<button onClick={this.closeModal.bind(this)} className="close">X</button>
		          
			        <form onSubmit = {this.formSubmit.bind(this)}>
			          	<h3>Request an invite</h3>
			          	<hr/>
			          	
			          	<div className="form-input">
			          		{(this.state.errors.fullName != undefined) && <div className="error">{this.state.errors.fullName}</div>}
			            	<input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange.bind(this)} placeholder="Enter full name"/>
			            </div>

			            <div className="form-input">
			            	{(this.state.errors.email != undefined) && <div className="error">{this.state.errors.email}</div>}
			            	<input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Enter email "/>
			           	</div>
			            <div className="form-input">
			            	{(this.state.errors.confirmEmail != undefined) && <div className="error">{this.state.errors.confirmEmail}</div>}
			            	<input type="text" name="confirmEmail" value={this.state.confirmEmail} onChange={this.handleChange.bind(this)} placeholder="Confirm email"/>
			            </div>
			            <button> Send </button>
			        </form>
		        </Modal>
        	</div>
        );
    }
}

export default Subscribe