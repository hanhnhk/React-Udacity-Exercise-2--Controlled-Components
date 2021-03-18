import React, {Component} from 'react'

export default class AddItem extends Component{
		
	state = {
    	value: ''
    };

	handleChange = event => {
    	this.setState({ value: event.target.value });
	  };
	  
	handleSubmit = (event) =>{
		this.props.addItem(event, this.state.value);
	}

	inputIsEmpty = () => {
		return this.state.value === '';
	};
	
	render(){
		const value= this.state.value;
		return <form onSubmit={this.handleSubmit}>
			<input
				type="text"
				placeholder="Enter New Item"
				value={value}
				onChange={this.handleChange}
			/>
			<button disabled={this.inputIsEmpty()}>Add</button>
        </form>;
	}
}