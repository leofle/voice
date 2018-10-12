import React,{Fragment} from 'react'
import { Card, Title } from '../../styles'
import store from '../../store'

const About = () => (
  <Fragment>
    <Card>
      <Title>About Balls</Title>
      <p>{store.getState().labels.label}</p>
    </Card>
  </Fragment>
)

export default About
