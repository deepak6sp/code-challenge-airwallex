import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class StandardInputText extends Component {
    render(){
        return (
			<input 
				type="text" 
				name={this.props.Name}
				value={this.props.Value} 
				onChange={this.props.OnChange} 
				onBlur = {this.props.OnBlur}
				onKeyDown={this.props.OnKeyDown} 
				placeholder={this.props.Placeholder}

			/>
        	
        );
    }
}

export class StandardButton extends Component {
    render(){
        return (
			<button 
				type="submit" 
				onClick={this.props.OnClick}
				id={this.props.id} 
				className={this.props.className}>
				{this.props.children}
			</button>
        	
        );
    }
} 