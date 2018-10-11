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
  suckballs,
  punchballs,
} from '../../reducers/balls'
import { Card, CardFlex, Button, Title } from '../../styles'

const Home = props => (
  <Fragment>
    <Card>
      <Title>Home</Title>
      <p>Count: {props.count}</p>
      <p>Balls: {props.balls}</p>
    </Card>
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

        <Button onClick={props.suckballs}>suckballs</Button>
        <Button onClick={props.punchballs}>punchballs</Button>

    </CardFlex>
  </Fragment>
)

const mapStateToProps = ({ counter, ballers }) => ({
  count: counter.count,
  balls: ballers.balls,
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
      changePage: () => push('/about-us'),
      punchballs,
      suckballs
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
