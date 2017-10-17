import React, { Component } from 'react'
import { Grid,Row,Col,Image} from 'react-bootstrap';
<<<<<<< HEAD:src/package/Edit.js
import FormContainer from './ComponentLV2/FormContainer'
=======
import FormContainer from './componentLv1/FormContainer'
>>>>>>> dev:src/component/Edit.js
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
                </Col>
                <FormContainer
                name={this.state.person.name}
                facebook={this.state.person.facebook}
                rank={this.state.person.rank}
                id={this.props.params.id}
                />
                </Row>
            </Grid>
        </div>
    );
  }
}
export default Edit
