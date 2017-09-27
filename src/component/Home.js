import React, { Component } from 'react'
import { FormGroup,ControlLabel,HelpBlock,FormControl,Grid,Row,Col,Input} from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
        <div>
            <Grid>
                <Row>

                    <Col xs={6} md={7}>
                        <form action='http://localhost:3001/c' method='post'>
                        <FormGroup>

                        </FormGroup>
                            <FormGroup>
                                <FormControl type="text" name='name'placeholder="Enter Name"/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="text" name='facebook'placeholder="Enter facebook"/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="text" name='rank'placeholder="Enter rank"/>
                                <HelpBlock>Number 0-10000</HelpBlock>
                            </FormGroup>
                             <input type="submit" value="Submit" bsStyle="success"/>
                        </form>
                    </Col>
                </Row>
            </Grid>
       </div>
    )
  }
}
export default Home
