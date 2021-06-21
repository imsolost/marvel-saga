import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Deck from '../assets/deck'
import SagaCards from '../components/SagaCards/SagaCards'

import _ from 'lodash'

const Create = () => {
  const shuffledDeck = _.shuffle(Deck)
  const cards = shuffledDeck.slice(-10)
  
  return(
    <div>
      <Link to="/">Home</Link>
      <Header headerText="Create Your Character" />
      <SagaCards cards={cards} />
    </div>
  )
}

export default Create