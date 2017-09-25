import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
class Pages extends Component {
    /*  กรณีที่ api ไม่ส่งค่ามา  ต้องทำค่าเริ่มต้นให้มัน */
    state = {
        pages: [],
        errs:[]
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
      console.log(this.state.errs);
    return (
            <div className ='col-md-10'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>facebook</th>
                            <th>img</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.pages.map((page) => (
                        <tr>

                        <th>{page.name}</th>
                        <td>{page.facebook}</td>
                        <td>{page.img}</td>
                        <td>{page.Rank}</td>
                       </tr>
                     ))
                   }
                    </tbody>
                </table>
            </div>


    )
  }
}
export default Pages
