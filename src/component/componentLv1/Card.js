import React, { Component } from 'react'

import { Button,Thumbnail} from 'react-bootstrap';
import { Link } from 'react-router'
class Card extends Component {
    deleteData(id) {
      fetch('http://localhost:3001/c'+ id, {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
      }).then(response => response.json())
    }
  render() {
    return (

        <Thumbnail src={this.props.img}  alt="242x200">
            <a href={this.props.facebook}>
                <h3>{this.props.name}</h3>
             </a>
            <p>
            <Link to={{ pathname: `/Edit/${ this.props.id }` }}
            className="btn btn-primary" >
                Edit
            </Link> &nbsp;

            <Button bsStyle="danger" onClick={this.deleteData.bind(this.props.id)}> Delete</Button> &nbsp;

            <Button bsStyle="success"> RanK: {this.props.rank}</Button>
            </p>
        </Thumbnail>
    )
  }
}
export default Card
/*
*/
