// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHeads: false, Total: 0, Heads: 0, Tails: 0}

  onClickAction = () => {
    const {isHeads} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHeads: true,
        Total: prevState.Total + 1,
        Heads: prevState.Heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHeads: false,
        Total: prevState.Total + 1,
        Tails: prevState.Tails + 1,
      }))
    }
  }

  render() {
    const {isHeads, Total, Heads, Tails} = this.setState
    return (
      <div className="container">
        <div className="card">
          <h1 className="h1">Coin Toss Game</h1>
          <p className="p1">Heads (or) Tails</p>
          {isHeads ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="i1"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="i1"
              alt="toss result"
            />
          )}
          <button className="btn1" type="button" onClick={this.onClickAction}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="p3">Total: {Total}</p>
            <p className="p2">Heads: {Heads}</p>
            <p className="p2">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
