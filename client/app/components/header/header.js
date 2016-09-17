import './header.scss';

import React from 'react';

const Header = (props) =>{
    return ( 
    	<header> 
    		<p className="brand-name"> {props.BrandName} </p>
    	</header>
    );
}
 
export default Header