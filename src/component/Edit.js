import React, { Component } from 'react'


class Edit extends Component {
    constructor(props){
        super(props);
    }
    state = {
        pages: [],
  }
  componentDidMount() {
    fetch('http://localhost:3001//c')
      .then(response => {
          return response.json()
      })
      .then(pages =>
          this.setState( { pages } )
      )
  }
  render() {
    return (
    <div>
    FUck
    </div>
    )
  }
}
export default Edit
