import { GUESS_LETTER } from '../actions/guessLetter'

const guesses = ['e', 'p']

export default (state = guesses, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
      const newLetter = payload.guess
      guesses.push(newLetter)
      return [...guesses]
    default :
      return state
  }
}
