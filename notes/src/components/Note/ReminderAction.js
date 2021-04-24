import React, { useState } from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const ReminderAction = ({ onAddReminder }) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const toggleReminder = () => {
    setOpen(() => !open);
  };

  const handleSave = () => {
    onAddReminder(selectedDate);
    toggleReminder();
  };

  return (
    <Box>
      <IconButton aria-label="Remind" onClick={toggleReminder}>
        <AlarmIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={toggleReminder}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Remind</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                label="Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                label="Time"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleReminder} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReminderAction;
