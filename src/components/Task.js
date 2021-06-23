import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin-bottom: 8px;
  color: lightgrey;
  border: 1px solid ${props => (props.isDragging ? 'black' : 'lightgrey')};
  padding: 8px;
  border-radius: 2px;
  background-color: ${props => (props.color)};
`

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.name} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          color={task.color}
        >
          {task.name}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;