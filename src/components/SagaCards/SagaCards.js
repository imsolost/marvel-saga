import React from 'react';
import Grid from '@material-ui/core/Grid';

import SagaCard from '../SagaCard/SagaCard';
import useStyles from './styles';
import { Draggable } from 'react-beautiful-dnd';

const SagaCards = ({ cards }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {cards.map((card, index) => (
          <Draggable key={card.id} draggableId={card.name} index={index} >
            {(provided) => (
              <Grid
                item xs={12} sm={6} md={4} lg={3}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <SagaCard card={card} />
              </Grid>
            )}
          </Draggable>
        ))}
      </Grid>
    </main>
  );
};

export default SagaCards;