import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Home from "./home/home.js";

class App extends Component {
    render() {
        return ( 
        	<div>
        		<Header BrandName="Brocollo and Co."/>
        		<Home />
        		<Footer />
        	</div>
        );
    }
}
 
ReactDOM.render(<App />,document.getElementById("main")); 