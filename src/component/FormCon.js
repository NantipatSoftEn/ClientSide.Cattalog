import React, { Component } from 'react'
import request from 'superagent';
import { Grid,Row,Col,FormGroup,InputGroup,FormControl,Button} from 'react-bootstrap';

import ImageUploader from 'react-images-upload';

import AlertContainer from 'react-alert'

const CLOUDINARY_UPLOAD_PRESET = 'd6bx32ar';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/soften57/upload';

const initialState = {
    name:'',
    facebook:'',
    rank:'',
    uploadedFile:null,
    uploadedFileCloudinaryUrl:'',
};

let ReadySend  =  false;

class FormCon extends Component {
    constructor(props) {

        super(props);

        this.state = initialState;


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.resetState = this.resetState.bind(this);
    }
    /* For ImageUploader */
    onImageDrop(files) {
            console.log(files);
            this.setState({uploadedFile: files[0]});

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                         .field('file', file);

        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }

          console.log(response.body.secure_url);
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
    });
  }
    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        if (ReadySend) {
            fetch('http://localhost:3001/c', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                img: this.state.uploadedFileCloudinaryUrl,
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
               this.state.rank === '' ||
               this.state.uploadedFileCloudinaryUrl === ''
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
    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={7} xsOffset={3}>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        fileSizeError='fileSizeError'
                        onChange={this.onImageDrop.bind(this)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
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
    )
  }
}
export default FormCon
