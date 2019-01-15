import React, { Component } from 'react'

export default class withError extends Component {
  state = {
    error: null
  }

  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}
