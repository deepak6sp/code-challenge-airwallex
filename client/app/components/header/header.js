import './header.scss';

import React, { PropTypes } from 'react';

const Header = (props) =>{
    return ( 
    	<header> 
    		<p className="brand-name"> {props.BrandName} </p>
    	</header>
    );
}

Header.propTypes = {
  BrandName: PropTypes.string,
};
 
export default Header