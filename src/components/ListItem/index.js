import React from 'react'
import stampToHuman from '../../utils/dateUtils'
import { Button } from '../../styles'
const ListItem = ({items, delRecord}) => {
	const handleClick = ()=> {
		delRecord(items.id);
	}
	return (
		<li>
			<span>Recording: {items.name}</span>
			<span>Start Time: {items.startTime}</span>
			<span>Stop Time: {items.stopTime}</span>
			<span>Total Time: {stampToHuman(items.stopTime, items.startTime)}</span>
			<audio id="audio" controls src={items.blobUrl}></audio>
			<Button onClick={handleClick}>Del</Button>
		</li>
	)
}
export default ListItem;