import { FC, useState } from 'react';
import moment from 'moment-mini';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';

import cardStyles from './styles';

interface ICardComponentProps {
  title: string;
  user: string;
  date: string;
  onDelete: () => void;
  description?: string;
}

const CardComponent: FC<ICardComponentProps> = props => {
  const classes = cardStyles();

  const { title, user, date, description, onDelete } = props;

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setAnchorElement(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="board" className={classes.avatar} title={user}>
            {user.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <>
            <IconButton
              aria-label="options"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorElement}
              keepMounted
              open={Boolean(anchorElement)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem
                onClick={event => {
                  onDelete();
                  handleClose(event);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </>
        }
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
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
