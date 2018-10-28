import React,{Fragment} from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.scss'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  clientState: {
    defaults: {
      recordStatus: {
        __typename: "recordStatus",
        isRecording: false
      }
    },
    resolvers: {
      Query: {},
      Mutation: {
        updateRecordStatus: (_, { isRecording }, { cache }) => {
          cache.writeData({
            data: {
              recordStatus: {
                __typename: "recordStatus",
                isRecording
              }
            }
          });
          return null;
        }
      }
    }
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
