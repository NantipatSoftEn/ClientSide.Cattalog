import React, { Component } from 'react'

import { Grid,Row,Col,FormGroup,InputGroup,FormControl,Button} from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {img:'',name: '', facebook: '',rank:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/c', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            name: this.state.name,
            facebook: this.state.facebook,
            rank: this.state.rank,
        })
    })
  }
  render() {
    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={7}>
                    <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>Name</InputGroup.Addon>
                                <FormControl type="text" ref='name' name='name' value={this.state.name} onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>Facebook</InputGroup.Addon>
                                <FormControl type="text" ref='facebook' name='facebook' value={this.state.facebook} onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>Rank</InputGroup.Addon>
                                <FormControl type="text" ref='rank' name='rank' value={this.state.rank} onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                                    <Button type="submit" bsStyle="success">Submit</Button>
                    </form>
                    </Col>
                </Row>
            </Grid>
       </div>
    )
  }
}
export default Home
