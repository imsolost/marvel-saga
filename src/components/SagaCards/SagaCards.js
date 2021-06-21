import React from 'react';
import Grid from '@material-ui/core/Grid';

import SagaCard from '../SagaCard/SagaCard';
import useStyles from './styles';

const SagaCards = ({ cards }) => {
  const classes = useStyles();

  // if (!cards.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {cards.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
            <SagaCard card={card} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default SagaCards;