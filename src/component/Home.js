import React, { Component } from 'react'

import { FormGroup,HelpBlock,FormControl,Grid,Row,Col,Button} from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
        <div>
            <Grid>
                <Row>

                    <Col xs={6} md={7}>
                        <form onSubmit={this.handleSubmit} method='post'>
                        <FormGroup>
                        <FormControl type="file" name='img' />
                        </FormGroup>
                            <FormGroup>
                                <FormControl type="text" name='name'placeholder="Enter Name" bsSize="large"/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="text" name='facebook'placeholder="Enter facebook" bsSize="large"/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="text" name='rank'placeholder="Enter rank" bsSize="large"/>
                                <HelpBlock>Number 0-10000</HelpBlock>
                            </FormGroup>
                             <Button bsStyle="success" type="submit">Success</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
       </div>
    )
  }
}
export default Home
