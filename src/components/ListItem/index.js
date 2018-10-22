import React from 'react'
import stampToHuman from '../../utils/dateUtils'
import { Button } from '../../styles'
const ListItem = ({items, delRecord}) => {
	const handleClick = ()=> {
		delRecord(items.id);
	}
	return (
		<li>
			<span>{items.name || '--'}</span>
			<span>{items.startTime}</span>
			<span>{items.stopTime}</span>
			<span>{stampToHuman(items.stopTime, items.startTime)}</span>
			<audio id="audio"  src={items.blobUrl}></audio>
			<Button onClick={handleClick}>Del</Button>
		</li>
	)
}
export default ListItem;