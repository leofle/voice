import React, { Component } from 'react'
import { Card, Input } from '../../styles'
import store from '../../store';

export default class Form extends Component {

	onChange = (event)=> {
		this.props.addlabel(event.target.value);
	}
	onSubmit = (event)=> {
		event.preventDefault();
		console.log(store.getState().labels.label)
	}
	render() {
		return (
			<Card>
				<form onSubmit={this.onSubmit}>
					<label>Add data
						<Input type="text" onChange={this.onChange} value={this.props.label}/>
					</label>
					<input type="submit" color={'cyan'} value="Submit"/>
				</form>
			</Card>
		)
	}
}
