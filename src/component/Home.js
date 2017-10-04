import React, { Component } from 'react'

import { Grid,Row,Col} from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'กรุณากรอกชื่อ', facebook: 'กรุณากรอก link facebook'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/c/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            name: this.state.name,
            facebook: this.state.facebook,
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
                        <label> Name
                            <input type="text" ref='name' name='name' placeholder={this.state.name} onChange={this.handleChange} />
                            <input type="text" ref='name' name='facebook' placeholder={this.state.facebook} onChange={this.handleChange} />
                        </label>
                    <input type="submit" value="Submit" />
                    </form>
                    </Col>
                </Row>
            </Grid>
       </div>
    )
  }
}
export default Home
