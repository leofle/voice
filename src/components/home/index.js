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
  stoprecord,
  saverecord
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
        <Button onClick={onRecordingStart}>
        <svg viewBox="0 0 24 24" 
          width="25"
          fill="#fff">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
        </svg>
        </Button>
        <Button bcolor="#be47ff" onClick={props.stoprecord} 
          disabled={!props.record}>
          stop record
        </Button>
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
      stoprecord,
      saverecord
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
