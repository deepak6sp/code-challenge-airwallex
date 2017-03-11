import './home.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Registration from '../registration/registration';


const Home = (props) => {
        return (
        	<main>
        		<div>
	        		<h1> A better way <br/>to enjoy every day. </h1>
	        		<p> Be the first to know when we launch </p>
	        		<Registration />
	        	</div>
        	</main>
        );
}

export default Home
