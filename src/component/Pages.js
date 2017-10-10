import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Button,Grid,Row,Col,Thumbnail} from 'react-bootstrap';
import { Link } from 'react-router'
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
                    {
                    this.state.pages.map((page) => (
                        <Col xs={6} md={4} >
                                <Thumbnail src={page.img}  alt="242x200">
                                    <a href={page.facebook}>
                                        <h3>{page.name}</h3>
                                     </a>
                                    <p>
                                    <Link to={{ pathname: `/Edit/${ page._id }` }}
                                    className="btn btn-primary" >
                                        Edit
                                    </Link> &nbsp;

                                    <Link to={{ pathname: '/Delete' }}
                                    className="btn btn-danger">
                                        Delete
                                    </Link> &nbsp;

                                    <Button bsStyle="success"> RanK: {page.rank}</Button>
                                    </p>
                                </Thumbnail>
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
