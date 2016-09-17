import './footer.scss';

import React, { PropTypes } from 'react';

const Footer = (props) => {
    return ( 
    	<footer> 
    		<div>
        		<p className="footerTitle"> Made with <span className='heart'></span>in Melbourne </p>
        		<p className="copyrights"> { props.Copyrights } </p>
        	</div>
    	</footer>
    );
}
 
Footer.propTypes = {
  Copyrights:PropTypes.string,
};

export default Footer