import React, {Fragment} from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'
import {
  addlabel,
  removelabel,
} from '../../reducers/input'
import {
  startrecord,
  stoprecord
} from '../../reducers/record'
import Form from '../Form'
import {Voice} from '../Voice'
import { Card, CardFlex, Button } from '../../styles'

const Home = (props) => {
  const onRecordingStart = ()=> {
    props.startrecord();
    props.increment();
  }
  return (
    <Fragment>
      <Voice {...props}/>
      <CardFlex>
          <Button onClick={onRecordingStart}>record</Button>
          <Button bcolor="#be47ff" onClick={props.stoprecord}>stop record</Button>
      </CardFlex>
      <Form {...props}/>
      <Card>
        <p>Recorded times: {props.count}</p>
        <p>Record name: {props.label}</p>
        <p>Record status: {props.record? 'recording':'stopped'}</p>
      </Card>
    </Fragment>
  )
}

const mapStateToProps = ({ counter, labels, records }) => ({
  count: counter.count,
  label: labels.label,
  record: records.recordstatus,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/list'),
      removelabel,
      addlabel,
      startrecord,
      stoprecord
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
