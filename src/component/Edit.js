import React, { Component } from 'react'
import { Button,Grid,Row,Col,FormGroup,Image,FormControl,InputGroup} from 'react-bootstrap';
import AlertContainer from 'react-alert'
const initialState = { person:[]};
class Edit extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.params.id);
        this.state = initialState;
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
                <Col xs={6} md={6} xsOffset={3}>
                    <Image src={this.state.person.img} responsive />
                    <form onSubmit={this.handleSubmit} >
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Addon>Name</InputGroup.Addon>
                                <FormControl type="text" ref='name' name='name'
                                value={this.state.name}
                                onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Addon>Facebook</InputGroup.Addon>
                                <FormControl type="text" ref='facebook' name='facebook'
                                value={this.state.facebook}
                                onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Addon>Rank</InputGroup.Addon>
                                <FormControl type="number" min="-10" max="99"
                                 ref='rank' name='rank'
                                 value={this.state.rank}
                                 onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                                <center>
                                    <Button type="submit" bsStyle="success" onClick={this.showAlert}>เก็บรูปในคลัง</Button>
                                </center>
                    </form>
                </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}
export default Edit
