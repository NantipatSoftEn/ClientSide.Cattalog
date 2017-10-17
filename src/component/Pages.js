import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import {Grid,Row,Col,Button } from 'react-bootstrap';
import Card from './componentLv1/Card'
class Pages extends Component {
    /*  กรณีที่ api ไม่ส่งค่ามา  ต้องทำค่าเริ่มต้นให้มัน */
    state = {
        pages: [],
  }
  onReloadPages = () => {
     fetch('http://localhost:3001/c')
       .then((response) => response.json())
       .then((pages) => this.setState({ pages }))
   }
  componentDidMount() {
    this.onReloadPages()
  }


  render() {
    return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={8} md={12}>
                            <Button bsStyle="warning"
                            bsSize="large" onClick={this.onReloadPages}>
                            Refresh</Button>
                        </Col>
                    </Row> <br />

                    <Row>
                    {
                    this.state.pages.map((page) => (
                        <Col xs={6} md={4} key={page._id}>
                            <Card
                            id={page._id}
                            img={page.img}
                            name={page.name}
                            facebook={page.facebook}
                            rank={page.rank}
                            />
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
