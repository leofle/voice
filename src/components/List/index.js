import React,{ Fragment, useEffect} from 'react'
import ListItem from '../ListItem'
import { compose, graphql, Query } from 'react-apollo'
import { Card, Title, ListClean } from '../../styles'
import {GET_RECORDS_QUERY, ADD_RECORD_MUTATION, DEL_RECORD_MUTATION} from '../../queries'

const List = (props) => {

  useEffect(() => {
    props.GET_RECORDS_QUERY.refetch()
  });

  const delRecord = (id)=>{
    props.DEL_RECORD_MUTATION({
      variables: {
        id:id
      }
    })
    props.GET_RECORDS_QUERY.refetch();
  }

  return (
    <Fragment>
      <Card bgcolor={'#f2f0f2'}>
        <Title>Records list</Title>
        <ListClean flgrow>
          <li>
            <span>Record</span>
            <span>Start Time</span>
            <span>Stop Time</span>
            <span>Total</span>
            <span>Actions</span>
          </li>
          <Query query={GET_RECORDS_QUERY}>
            {({loading, data, refetch})=>{
              if(loading) return 'loading...'
              const { records } = data;
                return records.map((record, index)=> <ListItem key={index} items={record} delRecord={delRecord} refetch={refetch}/>)
            }}
          </Query>
        </ListClean>
      </Card>
    </Fragment>
  )
}
export default compose(
  graphql(GET_RECORDS_QUERY, {name: 'GET_RECORDS_QUERY'}),
  graphql(ADD_RECORD_MUTATION, {name: 'ADD_RECORD_MUTATION'}),
  graphql(DEL_RECORD_MUTATION, {name: 'DEL_RECORD_MUTATION'}),
)(List)