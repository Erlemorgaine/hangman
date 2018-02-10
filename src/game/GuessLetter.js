import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class GuessLetter extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.array
  }

  constructor(props) {
    super()

    const guess = props
    this.state = {
      guess
    }
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

  makeGuess(event) {
    this.setState({
      guess: this.refs.guess.value
    })
  }

  render() {
    return(
      <main>
        { this.renderWord(this.props.word, this.props.guesses) }
      </main>
    )
  }
}

const mapStateToProps = ({ guesses }) => ({
  guesses
})

export default connect(mapStateToProps)(GuessLetter)
