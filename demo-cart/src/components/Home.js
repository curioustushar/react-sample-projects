import React, { useEffect } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './../actions/product.actions';

const Home = () => {
  const { items, itemsLoaded } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!itemsLoaded) {
      dispatch(fetchProducts());
    }
    return () => {};
  }, [dispatch, itemsLoaded]);

  if (!items || items.length === 0) return <Box m="3">loading...</Box>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="40px" p={3}>
      {items.map(i => (
        <Item key={i.id} item={i}></Item>
      ))}
    </SimpleGrid>
  );
};

export default Home;
