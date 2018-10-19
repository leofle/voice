import React,{Fragment} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './components/App'
import './index.scss'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})
const target = document.querySelector('#root')

render(
  <ApolloProvider client={client}>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <App />
      </Fragment>
    </ConnectedRouter>
  </Provider>
  </ApolloProvider>,
  target
)
