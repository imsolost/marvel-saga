import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../assets/initialData'
import Column from '../components/Column'

const About = () => {
  // const [state, setState] = useState({ initialData });
  const data = initialData

  const handleOnDragEnd = (result) => {
    
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