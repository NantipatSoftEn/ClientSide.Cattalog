import React, { Component } from 'react'
import request from 'superagent';
import { Grid,Row,Col} from 'react-bootstrap';

import ImageUploader from 'react-images-upload';

import FormContainer from './Component/FormContainer';

const CLOUDINARY_UPLOAD_PRESET = 'd6bx32ar';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/soften57/upload';

const initialState = {
    uploadedFile:null,
    uploadedFileCloudinaryUrl:'',
};
class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
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
                    </Col>
                    <FormContainer upload={this.state.uploadedFileCloudinaryUrl}/>
                </Row>
            </Grid>
       </div>
    )
  }
}
export default Upload
