import React,{ Component, PropTypes } from 'react';
import UI from '../components/UIComponents/ui';

const ThankYou = (props) => {
    return  (
    	<center className="thankyou">
    		<h3>All done!</h3>
	        <hr/>
	        <p> You will be one of the first to experience <br/>
	         Brocoli & Co. when we launch </p>
	        <UI.Button OnClick={props.onClick}>Ok</UI.Button>
	    </center>
    );
}

ThankYou.propTypes = {
  onClick: PropTypes.func,
};

export default ThankYou;