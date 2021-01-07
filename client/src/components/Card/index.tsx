import { FC } from 'react';
import moment from 'moment-mini';

import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core';
import cardStyles from './styles';

interface ICardComponentProps {
  title: string;
  user: string;
  date: string;
  description?: string;
}

const CardComponent: FC<ICardComponentProps> = props => {
  const classes = cardStyles();

  const { title, user, date, description } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="board" className={classes.avatar} title={user}>
            {user.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={<IconButton aria-label="settings">...</IconButton>}
        title={title}
        subheader={moment(date).format('DD MMM YYYY hh:mm A')}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        {description && (
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
