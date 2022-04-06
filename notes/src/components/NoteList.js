import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Note } from './Note';

export const NoteList = ({ items }) => {
  const { viewStyle } = useSelector((state) => state);

  return (
    <div>
      {viewStyle === 'grid' && (
        <Grid container spacing={3}>
          {items &&
            items.map((d) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={d.id}>
                <Note note={{ ...d.data(), id: d.id }} />
              </Grid>
            ))}
        </Grid>
      )}
      {viewStyle !== 'grid' &&
        items.map((d) => (
          <Box key={d.id} m={1}>
            <Note note={{ ...d.data(), id: d.id }} />
          </Box>
        ))}
    </div>
  );
};

export default NoteList;
