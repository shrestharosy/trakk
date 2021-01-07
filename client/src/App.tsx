import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';

import MainRouters from './routers';

function App() {
  const clasees = useStyles();
  return (
    <>
      <Container maxWidth={'lg'}>
        <AppBar
          className={clasees.appBar}
          position={'static'}
          color={'inherit'}
        />
        <Typography className={clasees.heading} variant={'h2'} align={'center'}>
          {/* Trackk */}
        </Typography>
        <MainRouters />
      </Container>
    </>
  );
}

export default App;
