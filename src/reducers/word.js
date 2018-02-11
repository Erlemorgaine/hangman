import words from '../words'
import _ from 'underscore'

const word = _.sample(words)

export default (state = word, { type, payload } = {}) => {
  return state
}
