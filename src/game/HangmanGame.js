import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import GuessLetter from './GuessLetter'
//import _ from 'underscore'

class HangmanGame extends PureComponent {

  render() {
    //const word = _.sample(this.props.words)
    const word = this.props.words[0]
    return(
      <div className="recipes wrapper">
        <header>
          <Title content='Can You Escape the Gallows...?'/>
        </header>


        <GuessLetter word={word} />
      </div>
    )
  }
}

const mapStateToProps = ({ words }) => ({
  words
})

export default connect(mapStateToProps)(HangmanGame)