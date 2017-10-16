import React, { Component } from 'react'

import { Grid,Row,Col,FormGroup,InputGroup,FormControl,Button} from 'react-bootstrap';



import AlertContainer from 'react-alert'



const initialState = {
    name:'',
    facebook:'',
    rank:'',
    upload:''
};

let ReadySend  =  false;


class FormContainer extends Component {
    constructor(props) {

        super(props);


        this.state = initialState;


        this.setState({upload:this.props.upload});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.resetState = this.resetState.bind(this);
    }


    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        const  id =  !!this.props.id ?  this.props.id: ''
        if (ReadySend) {
            fetch('http://localhost:3001/c/'+id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                img: this.props.upload,
                name: this.state.name,
                facebook: this.state.facebook,
                rank: this.state.rank,
            })
        })
        this.resetState();

        ReadySend = false;
        }
  }
  resetState() {
      this.setState(initialState);
  }
  alertOptions = {
    offset: 20,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }
  CheckForsomeFormEmty(){
      return   this.state.name === '' ||
               this.state.facebook === '' ||
               this.state.rank === ''
  }
  showAlert = () => {
    if (this.state === initialState)
        this.msg.error('ว่างเปล่า',
        {time: 2000,type: '',icon: '',});

    else if (this.CheckForsomeFormEmty())
             this.msg.info('ยังไม่กรอกข้อมูลบางอันเลยนะ',
             {time: 2000,type: 'success',icon: '',})

    else{
        this.msg.show('เก็บข้อมูลเรียบร้อย',
        {time: 2000,type: 'success',icon: '',})

        ReadySend = true;
    }

  }

  render() {
      let displayName = !!this.state.name ? this.state.name : this.props.name;
      let displayFacebook = !!this.state.facebook ? this.state.facebook : this.props.facebook;
      let displayRank = !!this.state.rank ? this.state.rank : this.props.rank;
    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={6} xsOffset={3}>

                    <form onSubmit={this.handleSubmit} >
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Addon>Name</InputGroup.Addon>
                                <FormControl type="text" ref='name' name='name'
                                value={displayName}
                                 onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Addon>Facebook</InputGroup.Addon>
                                <FormControl type="text" ref='facebook' name='facebook'
                                value={displayFacebook}
                                onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Addon>Rank</InputGroup.Addon>
                                <FormControl type="number" min="-10" max="99"
                                 ref='rank' name='rank'
                                 value={displayRank}
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
    )
  }
}
export default FormContainer
