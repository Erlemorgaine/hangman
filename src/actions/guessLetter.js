export const GUESS_LETTER = 'GUESS_LETTER'

export default (newLetter) => {
  return {
    type: GUESS_LETTER,
    payload: newLetter
  }
}
