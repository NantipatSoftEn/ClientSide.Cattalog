import React, { Component } from 'react'

import { Button,Thumbnail} from 'react-bootstrap';
import { Link } from 'react-router'
class Card extends Component {

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

            <Link to={{ pathname: `/Delete/${ this.props.id }` }}
            className="btn btn-danger" >
                Delete
            </Link> &nbsp;

            <Button bsStyle="success"> RanK: {this.props.rank}</Button>
            </p>
        </Thumbnail>
    )
  }
}
export default Card
/*
*/
