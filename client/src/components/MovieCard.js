import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MovieCard({name, description, year}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <hr/>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          {description}
        </Typography>
        <Typography className={classes.pos} color='textPrimary' gutterBottom>
          {year}
        </Typography>
      </CardContent>
      <hr/>
    </Card>
  );

}