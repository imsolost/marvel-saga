import React, { useState } from 'react'
import initialData from '../assets/initialData'
import Column from '../components/Column'

const About = () => {
  // const [state, setState] = useState({ initialData });
  const data = initialData

  return (
    data.columnOrder.map((columnId) => {
      const column = data.columns[columnId]
      const tasks = column.taskIds.map(taskId => data.tasks[taskId])

      return <Column key={column.id} column={column} tasks={tasks} />
    })
  )
}

export default About