import React, { Component } from 'react'
import request from 'superagent';
import { Grid,Row,Col,FormGroup,InputGroup,FormControl,Button} from 'react-bootstrap';

import ImageUploader from 'react-images-upload';

const CLOUDINARY_UPLOAD_PRESET = 'd6bx32ar';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/soften57/upload';

class Home extends Component {
    constructor(props) {

        super(props);

        this.state = {
            name: '',
            facebook: '',
            rank:'',
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* For ImageUploader */
    onImageDrop(files) {
            console.log(files);
            this.setState({
            uploadedFile: files[0]
        });

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

    handleChangeImg(event) {
        this
        console.log(event.target.files[0]);
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch('http://localhost:3001/c', {
            method: 'POST',
            headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            img: this.state.uploadedFileCloudinaryUrl,
            name: this.state.name,
            facebook: this.state.facebook,
            rank: this.state.rank
        });
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
                        onChange={this.onImageDrop.bind(this)}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                    <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <InputGroup>
                                <FormControl type="file" ref='img' name='img' value={this.state.img} onChange={this.handleChangeImg}  />
                        </InputGroup>
                    </FormGroup>
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
                                <FormControl type="number" min="-10" max="99" ref='rank' name='rank' value={this.state.rank} onChange={this.handleChange}  />
                        </InputGroup>
                    </FormGroup>
                                <center>
                                    <Button type="submit" bsStyle="success">เก็บรูปในคลัง</Button>
                                </center>
                    </form>
                    </Col>
                </Row>
            </Grid>
       </div>
    )
  }
}
export default Home
