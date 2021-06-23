import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../assets/initialData_copy'
import Column from '../components/Column'

const About = () => {
  const [data, updateState] = useState(initialData);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    if (result.destination.droppableId === result.source.droppableId
      && result.destination.index === result.source.index) {
      return
    }

    const column = data.columns[result.source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(result.source.index, 1)
    newTaskIds.splice(result.destination.index, 0, result.draggableId)

    const newColumn = {
      ...column,
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
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {data.columnOrder.map((columnId) => {
      const column = data.columns[columnId]
      const tasks = column.taskIds.map(taskId => data.tasks[taskId])

      return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}

export default About