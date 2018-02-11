import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Word from './Word'
import HangmanDrawing from './HangmanDrawing'
import words from '../words'
import _ from 'underscore'

class HangmanGame extends PureComponent {

  constructor(props) {
    super()

    const {word, guesses} = props
    this.state = {word, guesses}
  }

  wrongGuessCount(word, guesses) {
    var letters = word.split("")

    var wrongGuesses = guesses.filter(function (guess) {
      return letters.indexOf(guess) === -1;
    });

    if (wrongGuesses.length > 7) {
      return 'You cannot guess anymore... You are DEAD'
    }
    return `You have ${8-wrongGuesses.length} more guesses to go.`
  }

  isWinner(word, guesses) {
    var letters = word.split("")
    var unguessedLetters = letters.filter(function (letter) {
      return guesses.indexOf(letter) === -1;
    });

    if (unguessedLetters.length === 0) {
      return( <p>Not dying today, you lucky bastard!</p> )
    } else if (this.wrongGuessCount(word, this.props.guesses) > 7){
      return(<p>Dead men tell no tales... YOU HANG!!</p>)
    }
  }

  newWord(event) {
    this.setState({
      word: _.sample(words)
    })
  }

  newGame() {
    // const word = _.sample(words)
    // const guesses = []
    // this.setState({word, guesses})
  }

  render() {
    return(
      <div>
        <header>
          <Title content='Can You Escape the Gallows...?'/>
        </header>
        <Word word={ this.state.word } />
        <div className="guesses">{ this.wrongGuessCount(this.state.word, this.state.guesses) }</div>
        <HangmanDrawing />
        <br/>
        <div>{ this.isWinner(this.state.word, this.state.guesses) }</div>
        <br/><br/>
        <button className="primary" onClick={this.newWord.bind(this)}>New game</button>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({
  word,
  guesses
})

export default connect(mapStateToProps)(HangmanGame)
