import React, { Component } from 'react'
import { FormGroup,ControlLabel,HelpBlock,FormControl,Grid,Row} from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
        <div>
            <Grid>
                <Row>
                    <form>
                        <FormGroup controlId="formValidationSuccess1" validationState="success">
                            <ControlLabel>Input with success</ControlLabel>
                            <FormControl type="text" />
                            <HelpBlock>Help text with validation state.</HelpBlock>
                        </FormGroup>
                    </form>
                </Row>
            </Grid>
       </div>
    )
  }
}
export default Home
