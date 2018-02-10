import React, { PureComponent } from 'react'
//import Editor from 'react-medium-editor'
//import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
//import PropTypes from 'prop-types'
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
  }

  render() {
    return(
      <div className="guess-letter">
        <div className="text">
          <input
            type="text"
            ref="guess"
            className="title"
            placeholder="guess a letter if you dare..."
            defaultValue={this.state.guess}
            onChange={this.makeGuess.bind(this)}
            onKeyDown={this.makeGuess.bind(this)}/>
        </div>
        <div className="actions text">
          <button className="primary" onClick={this.saveGuess.bind(this)}>Submit</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { guessLetter })(GuessLetter)
