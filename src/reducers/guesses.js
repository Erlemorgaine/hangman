import { GUESS_LETTER } from '../actions/guessLetter'

const guesses = []

export default (state = guesses, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
      const newLetter = payload
      guesses.push(newLetter)
      return [...guesses]
    default :
      return state
  }
}
