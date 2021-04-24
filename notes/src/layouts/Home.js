import React from 'react';
import { useFirestoreCollection, useFirestore } from 'reactfire';
import { Form } from './../components/Form';
import NoteList from './../components/NoteList';

export const Home = () => {
  const notesRef = useFirestore().collection('notes');
  const orderByRef = notesRef.orderBy('createdAt', 'desc');

  const { data, status } = useFirestoreCollection(orderByRef);

  const addNote = async (data) => {
    try {
      await notesRef.doc().set({ ...data });
    } catch (error) {
      console.log(error.message);
    }
  };

  if (status === 'loading') return <div>Loading ...</div>;

  return (
    <>
      <Form onSubmit={addNote} />
      <NoteList items={data?.docs} />
    </>
  );
};

export default Home;
