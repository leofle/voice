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
import Form from '../Form'
import { Card, CardFlex, Button, Title } from '../../styles'

const Home = props => (
  <Fragment>
    <Card>
      <Title>Home</Title>
      <p>Count: {props.count}</p>
      <p>Balls: {props.label}</p>
    </Card>
    <Form {...props}/>
    <CardFlex>
        <Button onClick={props.increment}>Increment</Button>
        <Button onClick={props.incrementAsync} disabled={props.isIncrementing}>
          Increment Async
        </Button>
        <Button onClick={props.decrement}>Decrement</Button>
        <Button onClick={props.decrementAsync} disabled={props.isDecrementing}>
          Decrement Async
        </Button>

        <Button size={10} onClick={() => props.changePage()}>
          Go to about page via redux
        </Button>

        <Button onClick={()=> props.addlabel('pepe')}>addlabel</Button>
        <Button onClick={props.removelabel}>remove label</Button>

    </CardFlex>
  </Fragment>
)

const mapStateToProps = ({ counter, labels }) => ({
  count: counter.count,
  label: labels.label,
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
      changePage: () => push('/about'),
      removelabel,
      addlabel
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
