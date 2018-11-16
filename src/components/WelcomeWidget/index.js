import React from 'react'
import './style.scss'

function WelcomeWidget(){
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1; //January is 0!
	let yyyy = today.getFullYear();

	if(dd<10) {
			dd = '0'+dd
	} 

	if(mm<10) {
			mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;

	return (
		<div className={'welcome-container'}>
			<h1>Journey</h1>
			<p>{today}</p>
		</div>
	)
}
export default WelcomeWidget;