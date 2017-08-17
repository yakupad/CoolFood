import React, { Component } from 'react';
import {LoginStack, Root, Tabs } from './app/components/config/router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj5z6xqlleysa0183nrpvsfzw'}),
  dataIdFromObject: o => o.id,
})

export default class PageRouter extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    )
  }
}

