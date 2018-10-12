import React,{Fragment} from 'react'
import { Card, Title } from '../../styles'
import store from '../../store'

const List = () => (
  <Fragment>
    <Card>
      <Title>Records list</Title>
      <p>{store.getState().labels.label}</p>
    </Card>
  </Fragment>
)

export default List
