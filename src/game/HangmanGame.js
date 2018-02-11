import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Word from './Word'
//import _ from 'underscore'

class HangmanGame extends PureComponent {

  // wrongGuessCount(word, guesses) {
  //   var letters = word.split("")
  //
  //   var wrongGuesses = guesses.filter(function (guess) {
  //     return letters.indexOf(guess) === -1;
  //   });
  //   return wrongGuesses.length
  // }

  render() {
    //const word = _.sample(this.props.words)
    const word = this.props.words[0]
    return(
      <div className="recipes wrapper">
        <header>
          <Title content='Can You Escape the Gallows...?'/>
        </header>
        <Word word={word} />
      </div>
    )
  }
}

const mapStateToProps = ({ words, guesses }) => ({
  words,
  guesses
})

export default connect(mapStateToProps)(HangmanGame)
