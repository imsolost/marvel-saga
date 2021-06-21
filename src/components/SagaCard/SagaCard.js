import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

import useStyles from './styles';

const SagaCard = ({ card }) => {
  const classes = useStyles()

  const colorStyle = {
    backgroundColor: card.color,
    color: 'white'
  }

  return (
    <Card className={classes.root}>
      <CardContent style={colorStyle} >
        <div className={classes.cardContent} >
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {card.value}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: card.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
    </Card>
  );
};

export default SagaCard;