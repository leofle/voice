import React, {Fragment} from 'react'
import './style.scss'

function CallWidget(props) {
	let name;
	if(props.activeName === 'lio'){
		name = (
			<Fragment>
				<img src={'lio.jpg'}/>
				<h3>Lio Fleishman</h3>
			</Fragment>
		)
	}
	if(props.activeName === 'shirley'){
		name = (
			<Fragment>
				<img src={'shirley.jpg'}/>
				<h3>Shirly Biniashvily</h3>
			</Fragment>
		)
	}

	if(props.activeName === 'thomas'){
		name = (
			<Fragment>
				<img src={'thomas.jpg'}/>
				<h3>Tomer Levin</h3>
			</Fragment>
		)
	}

	if(props.activeName === 'yotam'){
		name = (
			<Fragment>
				<img src={'yotam.jpg'}/>
				<h3>Yotam Roth</h3>
			</Fragment>
		)
	}
	if(props.activeName === 'madonna'){
		name = (
			<Fragment>
				<img src={'madonna.jpg'}/>
				<h3>Madonna</h3>
			</Fragment>
		)
	}
	if(props.activeName === 'eminem'){
		name = (
			<Fragment>
				<img src={'eminem.jpg'}/>
				<h3>Eminem</h3>
			</Fragment>
		)
	}
	return (
		<div className={'call-container'}>
				{name}
		</div>
	)
}

export default CallWidget
