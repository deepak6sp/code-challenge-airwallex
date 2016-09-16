import React from "react";

module.exports.StandardInputText = React.createClass({
    render: function(){
        return (
			<input 
				type="text" 
				name={this.props.Name}
				value={this.props.Value} 
				onChange={this.props.OnChange} 
				placeholder={this.props.Placeholder}
			/>
        	
        );
    }
}); 

module.exports.StandardButton = React.createClass({
    render: function(){
        return (
			<button type="submit" onClick={this.props.OnClick} className={this.props.className}>
				{this.props.children}
			</button>
        	
        );
    }
}); 