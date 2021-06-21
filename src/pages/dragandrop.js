import React, { useState } from 'react'
import { Link } from 'gatsby'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import _ from 'lodash'

import finalSpace from '../assets/finalspace'
import deck from '../assets/deck'

import '../styles/dragandrop.css'

const finalSpaceCharacters = finalSpace
// const shuffled = _.shuffle(deck)
// const cards = shuffled.slice(-10)
const cards = deck.slice(0,10)

function DragAndDrop() {
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
                {characters.map((card, index) => {
                  return (
                    <Draggable key={card.id} draggableId={card.name} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            { card.attr }
                            { card.value }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
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