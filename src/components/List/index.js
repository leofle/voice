import React,{Component, Fragment} from 'react'
import store from '../../store'
import ListItem from '../ListItem'

import { Card, Title, ListClean } from '../../styles'

export default class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      recordingList:[]
    }
  }
  componentDidMount(){
    console.log(store.getState().records.recordingList)
    this.setState({
      recordingList: store.getState().records.recordingList
    })
  }
  render() {
    const { recordingList } = this.state;
    return (
      <Fragment>
        <Card>
          <Title>Records list</Title>
          <ListClean>
            {recordingList && recordingList.map((listItem,index)=>{
              return <ListItem key={index} items={listItem}/>
            })}
          </ListClean>
          <p>{store.getState().labels.label}</p>
        </Card>
      </Fragment>
    )
  }
}
