import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  cardContainer: {
    padding: 20,
    textAlign: 'center'
  },
  card: {
    display: 'inline-block',
    maxWidth: 345
  },
  hint: {
    fontSize: 12
  },
  media: {
    height: 140
  }
});

type Props = {} & RouteComponentProps;

function NotFoundPage(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/0/07/Wrong_Way_Go_Back.svg"
          title="Wrong way"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wrong way
          </Typography>
          <Typography className={classes.hint} color="textSecondary" gutterBottom>
            The page you are looking for does not exist
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={() => props.history.push('/')}>
            Back home
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withRouter(NotFoundPage);
