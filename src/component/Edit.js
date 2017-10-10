import React, { Component } from 'react'


import { Button,Grid,Row,Col,Thumbnail} from 'react-bootstrap';
class Edit extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.params.id);
        this.state = {person:[]};
    }
    componentDidMount() {
      fetch('http://localhost:3001/c/'+this.props.params.id)
        .then(response => {
            return response.json()
        })
        .then(data =>
            this.setState({person:data} )
        )

    }
  render() {
    return (
        <div>
            <Grid>
                <Row>
                    {this.state.person.name}
                </Row>
            </Grid>
        </div>
    )
  }
}
export default Edit
