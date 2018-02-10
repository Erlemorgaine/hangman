import { GUESS_LETTER } from '../actions/guessLetter'

const guesses = ['e']

export default (state = guesses, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
      return guesses.push(payload)
    default :
      return state
  }
}
