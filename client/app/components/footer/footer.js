import './footer.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
    render() {
        return ( 
        	<footer> 
        		<div>
	        		<p> Made in Melbourne </p>
	        		<p> @ 2016 Broccoli and Co. All rights reversed </p>
	        	</div>
        	</footer>
        );
    }
}
 
export default Footer