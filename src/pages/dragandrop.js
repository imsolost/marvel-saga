import React, { useState } from 'react'
import { Link } from 'gatsby'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import _ from 'lodash'

import DraggableCard from '../components/DraggableCard'
import deck from '../assets/deck'

import '../styles/dragandrop.css'

const shuffled = _.shuffle(deck)
const cards = shuffled.slice(-10)

const DragAndDrop = () => {
  const [characters, updateCharacters] = useState(cards)

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="DragAndDrop">
      <Link to="/">Home</Link>
      <header className="DragAndDrop-header">
        <h1>Create Character</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map((card, index) => (
                  <DraggableCard key={card.id} card={card} index={index} />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default DragAndDrop;