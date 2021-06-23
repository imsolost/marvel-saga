import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 8px;
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 2px;
`

const Task = ({task}) => {
  return (
    <Container>
      {task.content}
    </Container>
  );
};

export default Task;