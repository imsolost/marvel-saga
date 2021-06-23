import React from 'react'
import { Draggable } from 'react-beautiful-dnd'


const DraggableCard = ({ card, index }) => {
  return (
    <Draggable draggableId={card.name} index={index} >
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // style={{backgroundColor: card.color, color: colorFormat(card.color)}}
        >
          <p>{card.attr}</p>
          <p>{card.value}</p>
        </li>
      )}
    </Draggable>
  );
};

export default DraggableCard;