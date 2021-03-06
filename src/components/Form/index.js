import React, { Component } from 'react'
import { Card, Input } from '../../styles'

export default class Form extends Component {

	onChange = (e)=> {
		this.props.addLabel(e.target.value);
	}
	onSubmit = (e)=> {
		e.preventDefault();
		this.props.hadleSubmit(e);
	}
	render() {
		return (
			<Card>
				<form onSubmit={this.onSubmit}>
					<label>
						Add data
						<Input type="text" onChange={this.onChange} value={this.props.label}/>
					</label>
					<input type="submit" color={'cyan'} value="Submit"/>
				</form>
			</Card>
		)
	}
}
