import React from 'react';
import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
} from '@material-ui/core';

import useStyles from './styles';

import MainRouters from './routers';

function App() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <AppBar
          position="static"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6">Trakk</Typography>
          </Toolbar>
        </AppBar>
        <MainRouters />
      </Container>
    </>
  );
}

export default App;
