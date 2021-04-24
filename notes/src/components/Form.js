import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'column',
    width: 'clamp(300px, 500px, 50%)',
  },
  input: {
    marginTop: theme.spacing(),
  },
  button: {
    margin: `${theme.spacing(2)}px 0`,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const initFormState = { title: '', description: '' };

export const Form = ({ onSubmit }) => {
  const [form, setFrom] = useState(() => initFormState);
  const classes = useStyles();

  const addNote = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (Object.values(form).filter(Boolean).length < 1) return;

    onSubmit({ ...form, favorite: false, createdAt: new Date() });
    setFrom(() => initFormState);
  };

  const onChangeValue = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box my={2}>
      <Paper component="form" className={classes.root} onSubmit={addNote}>
        <Box p={2}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            className={classes.input}
            defaultValue={form.title}
            onChange={onChangeValue}
          ></TextField>

          <TextField
            fullWidth
            label="Description"
            name="description"
            multiline
            rows={3}
            className={classes.input}
            defaultValue={form.description}
            onChange={onChangeValue}
          ></TextField>

          <Grid
            className={classes.button}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Button variant="contained" color="primary" type="submit">
              Add Note
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Form;
