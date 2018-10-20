import React,{Component, Fragment} from 'react'
import store from '../../store'
import ListItem from '../ListItem'
import { compose, graphql } from 'react-apollo'
import { Card, Title, ListClean } from '../../styles'
import {getRecordsQuery, addRecordMutation, delRecordMutation} from '../../queries'

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      recordingList:[]
    }
  }
  componentDidMount(){
    if(!this.props.getRecordsQuery.loading){
      this.setState({
        recordingList: this.props.getRecordsQuery.records
      })
    }
    console.log(this.state.recordingList)
  }
  delRecord =(id)=>{
    this.props.delRecordMutation({
      variables: {
        id:id
      }
    })
    this.setState({});
  }
  displayRecords(){
    let data = this.props.getRecordsQuery;
    if(data.laoding){
      return(<div>loading...</div>);
    }
    else {
      return data.records && data.records.map((record, index)=> {
        return <ListItem key={index} items={record} delRecord={this.delRecord}/>;
      })
    }
  }

  render() {
    const { recordingList } = this.state;

    return (
      <Fragment>
        <Card>
          <Title>Records list</Title>
          <ListClean>
            {this.displayRecords()}
          </ListClean>
          <p>{store.getState().labels.label}</p>
        </Card>
      </Fragment>
    )
  }
}
export default compose(
  graphql(getRecordsQuery, {name: 'getRecordsQuery'}),
  graphql(addRecordMutation, {name: 'addRecordMutation'}),
  graphql(delRecordMutation, {name: 'delRecordMutation'}),
)(List)