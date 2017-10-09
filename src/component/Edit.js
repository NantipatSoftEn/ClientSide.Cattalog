import React, { Component } from 'react'


import { Button,Grid,Row,Col,Thumbnail} from 'react-bootstrap';
class Edit extends Component {
    constructor(props) {
        super(props);

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
            this.setState( { pages } )
        )
    }
  render() {
    return (
        <div>
            <Grid>
                <Row>
                {
                this.state.pages.map((page) => (
                    <Col xs={6} md={4} >
                            <Thumbnail src={page.img}  alt="242x200">
                                <a href={page.facebook}>
                                    <h3>{page.name}</h3>
                                 </a>
                                <p>
                                    <Button bsStyle="success"> RanK: {page.rank}</Button>
                                </p>
                            </Thumbnail>
                    </Col>
                    ))
                }
                </Row>
            </Grid>
        </div>
    )
  }
}
export default Edit
