import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  changeWord = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.changeWord}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
