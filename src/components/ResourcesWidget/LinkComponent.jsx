import React from 'react'
import TopicsWidget from '../TopicsWidget';
import { Button, CardFlex } from '../../styles'

const titles = {
	'ssl': 'SSL And Security in Sisense',
	'sso': ['Sisense Security Overview', 'Case Study l New England Geriatrics'],
	'single sign on': 'Security',
	'pivot': 'Sisense Product Demo',
	'microservice': 'Architecture of Microservices',
	'microservices': 'Architecture of Microservices',
	'connector': 'Sisense Connectors & Beyond',
	'connectors': 'Sisense Connectors & Beyond',
	'export': '5 Signs Its Time To Ditch Excel Reporting',
	'linux': 'Sisense Linux Announcement Video',
	'pulse': 'Sisense Pulse Video',
	'performance': 'Sisense Performance on Big Data',
	'cloud': 'Webinar: Introducing IoT & Cloud into Your Business for Greater Insights',
	'mobile': 'Sisense Mobile App Demo',
	'plugins': 'Sisense Plugin Overview',
	'tracking': 'Sisense Security Overview',
	'Aerospace Customer': 'Case Study | Gentex',
};

export default function LinkComponent(props) {
	return (
		<li>
			<CardFlex column>
				<a href=''>{titles[props.topic]}</a>
				<p>Suggestion: {props.topic? props.topic : ''}</p>
				<Button>Send</Button>
			</CardFlex>
		</li>
	)
}
