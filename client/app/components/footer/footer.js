import './footer.scss';

import React from 'react';

const Footer = () => {
    return ( 
    	<footer> 
    		<div>
        		<p className="footerTitle"> Made with <span className="heart"></span>in Melbourne </p>
        		<p className="copyrights"> @ 2016 Broccoli and Co. All rights reversed </p>
        	</div>
    	</footer>
    );
}
 
export default Footer