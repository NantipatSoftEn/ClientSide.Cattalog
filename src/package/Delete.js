import React, { Component } from 'react'


class Delect extends Component {
    componentDidMount() {
        fetch('http://localhost:3001/c/', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
    })

    }
  render() {
    return (
    <div>

    </div>
    )
  }
}
export default Delect
