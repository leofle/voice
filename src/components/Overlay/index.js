import React, {Component} from 'react'
import './style.scss'

export default class Overlay extends Component {
	handleClick = ()=> {
		this.props.handleClick();
	}
	render(){
		const {status} = this.props;
		return (
			<div className={`overlay-container ${status? 'recording' : ''}`}
				onClick={this.handleClick}
			>
				{this.props.children}
			</div>
		)
	}
}
