import React, { Component } from 'react'


import { Button,Grid,Row,Col,Thumbnail} from 'react-bootstrap';
class Edit extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.params.id);
        this.state({gg:''});
    }
    state = {
        pages: [],
  }

    componentDidMount() {
      fetch('http://localhost:3001/c/'+this.props.params.id)
        .then(response => {
            return response.json()
        })
        .then(pages =>
            //console.log(pages)
            this.setState( { pages } )
        )

    }
  render() {
    return (
        <div>
            <Grid>
                <Row>
                {this.state.pages.name}
                </Row>
            </Grid>
        </div>
    )
  }
}
export default Edit
