import React from 'react';
import { useFirestoreCollection, useFirestore } from 'reactfire';
import { NoteList } from '../components/NoteList';
import NoData from '../components/NoData';
import Loading from './../components/Loading';
import AlarmIcon from '@material-ui/icons/Alarm';

export const Reminders = () => {
  const notesRef = useFirestore().collection('notes').orderBy('reminder');

  const { data, status } = useFirestoreCollection(notesRef);
  if (status === 'loading') return <Loading />;

  return (
    <div>
      {data?.docs.length ? (
        <NoteList items={data?.docs} />
      ) : (
        <NoData Icon={AlarmIcon}>You have no reminders</NoData>
      )}
    </div>
  );
};

export default Reminders;
