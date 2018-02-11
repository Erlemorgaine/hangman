import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Word from './Word'
import _ from 'underscore'

class HangmanGame extends PureComponent {

  wrongGuessCount(word, guesses) {
    var letters = word.split("")

    var wrongGuesses = guesses.filter(function (guess) {
      return letters.indexOf(guess) === -1;
    });
    return wrongGuesses.length
  }

  isWinner(word, guesses) {
    var letters = word.split("")
    var unguessedLetters = letters.filter(function (letter) {
      return guesses.indexOf(letter) === -1;
    });

    if (unguessedLetters.length === 0) {
      //return true
      return( <p>Not dying today, you lucky bastard!</p> )
    } else if (this.wrongGuessCount(word, this.props.guesses) > 9){
      //return false
      return(<p>Dead men tell no tales...</p>)
    }
  }

  setWord() {
    return _.sample(this.props.words)
  }

  newGame() {
    const word = this.setWord()
    return(
      <div className="recipes wrapper">
        <header>
          <Title content='Can You Escape the Gallows...?'/>
        </header>
        <Word word={word} />
        <div>You guessed { this.wrongGuessCount(word, this.props.guesses) } times wrong. </div>
        <div>{ this.isWinner(word, this.props.guesses) }</div>
      </div>
    )
  }

  newGameClass() {
    return 'new-game'
  }

  render() {
    //const word = _.sample(this.props.words)
    return(
      <div>

        <button
          className={this.newGameClass()} onClick={this.newGame}>New game
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ words, guesses }) => ({
  words,
  guesses
})

export default connect(mapStateToProps)(HangmanGame)
