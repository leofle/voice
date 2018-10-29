import React,{Fragment} from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.scss'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {defaults, resolvers} from './resolvers'

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  clientState: {
    defaults,
    resolvers
  }
})
const target = document.querySelector('#root')

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Fragment>
        <App />
      </Fragment>
    </BrowserRouter>
  </ApolloProvider>,
  target
)
