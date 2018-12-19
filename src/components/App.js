import React, { Component } from 'react'
import UserContainer from '../container/UserContainer'
import PageContainer from '../container/PageContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer />
      </div>
    )
  }
}

export default App