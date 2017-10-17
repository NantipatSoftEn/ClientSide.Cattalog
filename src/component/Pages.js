import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import {Grid,Row,Col} from 'react-bootstrap';
import Card from './componentLv1/Card'
class Pages extends Component {
    /*  กรณีที่ api ไม่ส่งค่ามา  ต้องทำค่าเริ่มต้นให้มัน */
    state = {
        pages: [],
  }

  componentDidMount() {
    fetch('http://localhost:3001/c')
      .then(response => {return response.json()})
      .then(pages =>this.setState( {pages} ))
  }


  render() {
    return (
            <div>
                <Grid>
                    <Row>
                    {
                    this.state.pages.map((page) => (
                        <Col xs={6} md={4} key={page._id}>
                            <Card
                            id={page._id}
                            img={page.img}
                            name={page.name}
                            facebook={page.facebook}
                            rank={page.rank} />
                        </Col>
                        ))
                    }
                    </Row>
                </Grid>
            </div>
    )
  }
}
export default Pages
/*
*/
