import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../assets/initialData_copy'
import Column from '../components/Column'

const Container = styled.div`
  display: flex
`

const About = () => {
  const [data, updateState] = useState(initialData);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    if (result.destination.droppableId === result.source.droppableId
      && result.destination.index === result.source.index) {
      return
    }

    const start = data.columns[result.source.droppableId]
    const finish = data.columns[result.destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(result.source.index, 1)
      newTaskIds.splice(result.destination.index, 0, result.draggableId)
  
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }
  
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        }
      }
  
      updateState(newState)
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(result.source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(result.destination.index, 0, result.draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    updateState(newState)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container>
        {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId]
        const tasks = column.taskIds.map(taskId => data.tasks[taskId])

        return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </Container>
    </DragDropContext>
  )
}

export default About