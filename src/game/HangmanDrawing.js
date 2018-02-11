import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './HangmanDrawing.css'
import _ from 'underscore'

class HangmanDrawing extends PureComponent {

  showStand() {
    return(
        <g className="hide" id="stand">
          <line x1="10" y1="250" x2="150" y2="250" stroke="rgb(0,0,0)" strokeWidth="2"/>
          <line id="door1" x1="150" y1="250" x2="200" y2="250" stroke="rgb(0,0,0)" strokeWidth="2"/>
          <line  id="door2" x1="200" y1="250" x2="250" y2="250" stroke="rgb(0,0,0)" strokeWidth="2"/>
          <line x1="250" y1="250" x2="390" y2="250" stroke="rgb(0,0,0)" strokeWidth="2"/>
          <line x1="100" y1="250" x2="100" y2="20" stroke="rgb(0,0,0)" strokeWidth="2"/>
          <line x1="100" y1="20" x2="200" y2="20" stroke="rgb(0,0,0)" strokeWidth="2"/>
          <line id="rope" x1="200" y1="20" x2="200" y2="60" stroke="rgb(0,0,0)" strokeWidth="2"/>
        </g>
    )
  }

  showHead() {
    return(
      <g className="hide" id="head">
        <circle cx="200" cy="80" r="20" stroke="black" strokeWidth="4" fill="white"/>
      </g>
    )
  }

  showEyes() {
    return(
      <g>
        <g className="hide" id="rEyes">
          <circle cx="193" cy="80" r="4"/>
          <circle cx="207" cy="80" r="4"/>
        </g>
        <g className="hide" id="xEyes">
          <line x1="190" y1="78" x2="196" y2="84"/>
          <line x1="204" y1="78" x2="210" y2="84"/>
          <line x1="190" y1="84" x2="196" y2="78"/>
          <line x1="204" y1="84" x2="210" y2="78"/>
        </g>
      </g>
    )

  }

  showBody() {
    return(
      <g className="hide" id="limbs">
        <line x1="200" y1="100" x2="200" y2="150" stroke="rgb(0,0,0)" strokeWidth="2"/>
      </g>
    )
  }

  showLeftArm() {
    return(<g className="hide" id="limbs">
      <line id="armL" x1="200" y1="120" x2="170" y2="140" stroke="rgb(0,0,0)" strokeWidth="2"/>
    </g>)
  }

  showRightArm() {
    return(<g className="hide" id="limbs">
      <line id="armR" x1="200" y1="120" x2="230" y2="140" stroke="rgb(0,0,0)" strokeWidth="2"/>
    </g>)
  }

  showLeftLeg() {
    return(
      <g className="hide" id="limbs">
        <line id="legL" x1="200" y1="150" x2="180" y2="190" stroke="rgb(0,0,0)" strokeWidth="2"/>
      </g>
    )
  }

  showRightLeg() {
    return(
      <g className="hide" id="limbs">
        <line id="legR" x1="200" y1="150" x2="220" y2="190" stroke="rgb(0,0,0)" strokeWidth="2"/>
      </g>
    )
  }

  showHangman(word, guesses) {
    const hangmanParts = [this.showStand(), this.showHead(), this.showEyes(), this.showBody(), this.showLeftArm(), this.showRightArm(), this.showLeftLeg(), this.showRightLeg()]
    var letters = word.split("")

    var wrongGuesses = guesses.filter(function (guess) {
      return letters.indexOf(guess) === -1;
    });
    return _.first(hangmanParts, [wrongGuesses.length])
  }



  render() {
    return(
      <div className="hangman">
        <svg height="300" width="400">
          { this.showHangman(this.props.word, this.props.guesses) }
        </svg>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({
  word,
  guesses
})

export default connect(mapStateToProps)(HangmanDrawing)
