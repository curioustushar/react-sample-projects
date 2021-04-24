import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import PaletteIcon from '@material-ui/icons/Palette';
import { makeStyles } from '@material-ui/core/styles';

const colors = [
  '#f44336',
  '#03a9f4',
  '#8bc34a',
  '#ffeb3b',
  '#ff9800',
  '#651fff',
];

const useStyles = makeStyles((theme) => ({
  paletteContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '200px',
  },
  paletteColor: {
    borderRadius: '50%',
    width: '24px',
    height: '24px',
  },
}));

export const PaletteAction = ({ onChangeColor }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color) => {
    onChangeColor(color);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton
        aria-label="open palette"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-describedby={id}
        onClick={handleClick}
      >
        <PaletteIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2} className={classes.paletteContainer}>
          <Box
            m={1}
            boxShadow={1}
            onClick={(_) => handleColorChange()}
            className={classes.paletteColor}
          ></Box>
          {colors.map((color) => (
            <Box
              m={1}
              key={color}
              boxShadow={1}
              bgcolor={color}
              onClick={(_) => handleColorChange(color)}
              className={classes.paletteColor}
            ></Box>
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default PaletteAction;
