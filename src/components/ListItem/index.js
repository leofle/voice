import React, {Fragment} from 'react'
import stampToHuman from '../../utils/dateUtils'
import { Button } from '../../styles'
const ListItem = ({items, delRecord, refetch}) => {
	const handleClick = ()=> {
		delRecord(items.id);
		refetch();
	}
	return (
		<Fragment>
			<li>
				{console.log(items.speech)}
				<span>{items.label || '--'}</span>
				<span>{items.startTime}</span>
				<span>{items.stopTime}</span>
				<span>{stampToHuman(items.stopTime, items.startTime)}</span>
				<Button onClick={handleClick}>Del</Button>
			</li>
			<li>
				<p>{items.speech}</p>
			</li>
		</Fragment>
	)
}
export default ListItem;