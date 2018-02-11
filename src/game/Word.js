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
    //console.log(guesses)
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

  wrongGuessCount(word, guesses) {
    var letters = word.split("")
    //var guesses =

    var wrongGuesses = guesses.filter(function (guess) {
      console.log(guess)
      return letters.indexOf(guess) === -1;
    });
    console.log(wrongGuesses)
    return wrongGuesses.length
  }

  render() {
    return(
      <main>
        <div className="text">{ this.renderWord(this.props.word, this.props.guesses) }</div>
        <GuessLetter />
        <div>You guessed { this.wrongGuessCount(this.props.word, this.props.guesses) } times wrong... </div>
      </main>
    )
  }
}

const mapStateToProps = ({ guesses }) => ({
  guesses
})

export default connect(mapStateToProps)(Word)
