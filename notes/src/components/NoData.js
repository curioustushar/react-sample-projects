import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

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

const NoData = ({ Icon, children }) => {
  const classes = useStyles();

  return (
    <Box height="calc(100vh - 64px)" className={classes.nodata}>
      <Box className={classes.icon}>
        <Icon fontSize="inherit" />
      </Box>
      <Typography variant="h4" gutterBottom>
        {children}
      </Typography>
    </Box>
  );
};

NoData.propTypes = {
  icon: PropTypes.instanceOf(Icon),
  children: PropTypes.string.isRequired,
};

export default NoData;
