import React from 'react';
import { useFirestoreCollection, useFirestore } from 'reactfire';
import { NoteList } from '../components/NoteList';
import NoData from '../components/NoData';
import Loading from './../components/Loading';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export const Favorites = () => {
  const notesRef = useFirestore()
    .collection('notes')
    .where('favorite', '==', true);

  const { data, status } = useFirestoreCollection(notesRef);

  if (status === 'loading') return <Loading />;

  return (
    <>
      {data?.docs.length ? (
        <NoteList items={data?.docs} />
      ) : (
        <NoData Icon={FavoriteBorderIcon}>You have no favorites</NoData>
      )}
    </>
  );
};

export default Favorites;
