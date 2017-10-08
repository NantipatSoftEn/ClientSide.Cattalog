import React, {Component} from 'react'
import AlertContainer from 'react-alert'

 class A extends Component {
  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Some text or component', {
      time: 2000,
      type: 'success',
    })
  }

  render () {
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    )
  }
}
export default A;
