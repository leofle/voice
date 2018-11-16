import React from 'react'
import './style.scss'

export default function StatusWidget() {
	const flag = 'flag.png';
	const logo = 'nasa.png';
	return (
		<div className={'status-container'}>
		<div className={'status-title'}> Status </div>
			<div className={'status-bar'}>
				<img className={'flag'} src={flag}/>
				<img className={'logo'} src={logo}/>
			</div>
		</div>
	)
}
