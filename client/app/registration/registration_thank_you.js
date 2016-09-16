import React,{ Component } from 'react';
import UI from '../components/UIComponents/ui';

const ThankYou = (props) => {
    return  (
    	<center className="thankyou">
    		<h3>All done</h3>
	        <hr/>
	        <p> You will be one of the first to experience </p>
	        <p> Brocoli & Co. when we launch </p>
	        <UI.Button OnClick={props.onClick}>close</UI.Button>
	    </center>
    );
}

export default ThankYou;