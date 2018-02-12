import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('<Title />', () => {
  const title = shallow(<Title content="Hangman Game"/>)

  it('has a h1 tag wrapping', () => {
    expect(title).toHaveTagName('h1')
  })

  it('renders the content', () => {
    expect(title).toHaveText('Hangman Game')
  })

  describe('title with a different content prop', () => {
    const title = shallow(<Title content="Another game" />)

    it('renders a different title text', () => {
      expect(title).toHaveText('Another game')
    })
  })

})
