import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guessLetter from '../actions/guessLetter'

class GuessLetter extends PureComponent {

  constructor(props) {
    super()

    const {guess} = props
    this.state = {guess}
  }

  makeGuess(event) {
    this.setState({
      guess: this.refs.guess.value
    })
  }

  saveGuess() {
    const guess = this.state
    this.props.guessLetter(guess)

    document.getElementById('enter-guess').value=""
  }

  render() {
    return(
      <div className="guess-letter">
        <div className="text">
          <input
            type="text"
            id="enter-guess"
            ref="guess"
            className="title"
            placeholder="guess a letter if you dare..."
            defaultValue=""
            onChange={this.makeGuess.bind(this)}
            onKeyDown={this.makeGuess.bind(this)}/>
        </div>
        <div className="actions text">
          <button className="primary" onClick={this.saveGuess.bind(this) }>Submit</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { guessLetter })(GuessLetter)
