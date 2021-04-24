import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useFirestore } from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';

import { ReminderAction } from './ReminderAction';
import { PaletteAction } from './PaletteAction';
import TrashIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingBottom: 0,
  },
}));
export const Note = ({ note }) => {
  const classes = useStyles();
  const [showActions, toggleShowActions] = useState(false);
  const notesRef = useFirestore().collection('notes');

  const deleteNote = async () => {
    try {
      await notesRef.doc(note.id).delete();
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeColor = async (colorVal = null) => {
    try {
      await notesRef.doc(note.id).update({ color: colorVal });
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToFavorites = async () => {
    try {
      await notesRef.doc(note.id).update({ favorite: !note.favorite });
    } catch (error) {
      console.log(error.message);
    }
  };

  const reminderHandler = async (date) => {
    try {
      await notesRef.doc(note.id).update({ reminder: date });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card
      style={{ backgroundColor: note.color }}
      onMouseEnter={(_) => toggleShowActions(!showActions)}
      onMouseLeave={(_) => toggleShowActions(!showActions)}
    >
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          {note.title}
        </Typography>

        <Typography variant="body2" component="p">
          {note.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {!showActions && <Box m={3}></Box>}
        {showActions && (
          <>
            <PaletteAction onChangeColor={changeColor} />
            <IconButton aria-label="add to favorites" onClick={addToFavorites}>
              {note.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <ReminderAction onAddReminder={reminderHandler} />
            <IconButton m={1} aria-label="Edit Note">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={deleteNote}>
              <TrashIcon />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default Note;
