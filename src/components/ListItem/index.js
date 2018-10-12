import React from 'react'
import stampToHuman from '../../utils/dateUtils'

const ListItem = ({items}) => {

	return (
		<li>
			<span>Recording {items.length}</span>
			<span>Start Time: {items.startTime}</span>
			<span>Stop Time: {items.stopTime}</span>
			<span>Total Time: {stampToHuman(items.stopTime, items.startTime)}</span>
		</li>
	)
}
export default ListItem;