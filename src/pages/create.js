import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Deck from '../components/deck'
import SagaCards from '../components/SagaCards/SagaCards'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import _ from 'lodash'

const Create = () => {
  const shuffledDeck = _.shuffle(Deck)
  const cards = shuffledDeck.slice(-10)
  
  return(
    <div>
      <Link to="/">Home</Link>
      <Header headerText="Create Your Character" />
      <DragDropContext>
        <Droppable droppableId="droppable" mode="virtual">
          {(provided) => (
            <SagaCards
              cards={cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            />
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Create