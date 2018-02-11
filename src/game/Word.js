import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import GuessLetter from './GuessLetter'
//import _ from 'underscore'

class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.array
  }

  renderWord(word, guesses) {
    var letters = word.split("")
    var guessArray = letters.map(function (letter) {
      if (guesses.indexOf(letter) !== -1) {
        return letter
      } else {
        return "_"
      }
    })
    var guessWord = guessArray.join(" ")
    return guessWord
  }

  render() {
    return(
      <main>
        <div className="text">{ this.renderWord(this.props.word, this.props.guesses) }</div>
        <GuessLetter />
      </main>
    )
  }
}

const mapStateToProps = ({ guesses }) => ({
  guesses
})

export default connect(mapStateToProps)(Word)
