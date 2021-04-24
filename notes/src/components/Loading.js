import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => ({
  nodata: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  icon: {
    marginBottom: '8px',
    fontSize: '64px',
    lineHeight: 1,
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box height="calc(100vh - 64px)" className={classes.nodata}>
      <Box className={classes.icon}>
        <LoopIcon fontSize="inherit" />
      </Box>
      <Typography variant="h4" gutterBottom>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
