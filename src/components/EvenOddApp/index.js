import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomnumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count * randomnumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div>
        <div className="container">
          <h1 className="heading">Count {count} </h1>
          <p>Count is {displayText}</p>
          <button className="btn" type="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p>Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
