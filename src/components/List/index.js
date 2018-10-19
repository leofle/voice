import React,{Component, Fragment} from 'react'
import store from '../../store'
import ListItem from '../ListItem'
import { compose, graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Card, Title, ListClean } from '../../styles'

const getRecordsQuery = gql`
  {
    records {
      id
      name
      startTime
      stopTime
      blobUrl
    }
  }
`;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      recordingList:[]
    }
  }
  componentDidMount(){
    if(!this.props.data.loading){
      this.setState({
        recordingList: this.props.data.records
        // recordingList: store.getState().records.recordingList
      })
    }
  }
  displayRecords(){
    let data = this.props.data;
    if(data.laoding){
      return(<div>loading...</div>);
    }
    else {
      return data.records && data.records.map((record, index)=> {
        return <ListItem key={index} items={record}/>;
      })
    }
  }
  render() {
    const { recordingList } = this.state;
    console.log(this.displayRecords())
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
export default graphql(getRecordsQuery)(List)