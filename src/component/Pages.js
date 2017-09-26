import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Button,Grid,Row,Col,Thumbnail,Image} from 'react-bootstrap';

class Pages extends Component {
    /*  กรณีที่ api ไม่ส่งค่ามา  ต้องทำค่าเริ่มต้นให้มัน */
    state = {
        pages: [],
  }
  componentDidMount() {
    fetch('http://localhost:3001/c')
      .then(response => {
          return response.json()
      })
      .then(pages =>
          this.setState( { pages } )
      )
  }

  render() {
    return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Thumbnail src="http://localhost:3000/viriya1.jpg" alt="242x200">
                                <h3>Thumbnail label</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </div>
    )
  }
}
export default Pages
