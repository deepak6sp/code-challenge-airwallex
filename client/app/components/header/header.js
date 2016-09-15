import './header.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    render() {
        return ( 
        	<header> 
        		<p className="brand-name"> Brocollo and Co. </p>
        	</header>
        );
    }
}
 
export default Header